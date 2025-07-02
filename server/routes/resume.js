const express = require('express');
const router = express.Router();
const { generateBehavioralQuestion, uploadMiddleware } = require('../controllers/resumeController');

router.post('/generate-question', uploadMiddleware, generateBehavioralQuestion);

// Voice feedback route for resume-based interviews
const multer = require('multer');
const { OpenAI } = require('openai');
const fs = require('fs');
const path = require('path');

const audioUpload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit for audio
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('audio/')) {
      cb(null, true);
    } else {
      cb(new Error('Only audio files are allowed'), false);
    }
  }
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/voice-feedback', audioUpload.single('audio'), async (req, res) => {
  try {
    console.log('🎤 Voice feedback request received');
    console.log('🔑 OpenAI API key available:', !!process.env.OPENAI_API_KEY);
    
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'Audio file is required' });
    }

    const question = req.body.question;
    if (!question) {
      return res.status(400).json({ success: false, error: 'Question is required' });
    }

    console.log('🎤 Processing audio file:', {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size
    });

    // 1. Transcribe audio with Whisper
    console.log('🎤 Transcribing audio...');
    console.log('🎤 Audio details:', {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size
    });
    
    // Create a temporary file for Whisper API
    const tempFileName = `temp_audio_${Date.now()}.webm`;
    const tempFilePath = path.join(__dirname, '../uploads', tempFileName);
    
    // Ensure uploads directory exists
    const uploadsDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }
    
    // Write buffer to temporary file
    console.log('💾 Writing audio to temporary file:', tempFilePath);
    fs.writeFileSync(tempFilePath, req.file.buffer);
    
    let answer;
    try {
      console.log('🔊 Calling OpenAI Whisper API...');
      const transcription = await openai.audio.transcriptions.create({
        file: fs.createReadStream(tempFilePath),
        model: 'whisper-1',
      });

      // Clean up temporary file
      fs.unlinkSync(tempFilePath);
      
      answer = transcription.text;
      console.log('🎤 Transcribed Answer:', answer);
      
      if (!answer || answer.trim().length === 0) {
        throw new Error('No speech detected in audio file');
      }
    } catch (transcriptionError) {
      // Clean up temporary file on error
      if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath);
      }
      console.error('❌ Transcription error:', transcriptionError.message);
      console.error('❌ Full transcription error:', transcriptionError);
      throw new Error(`Audio transcription failed: ${transcriptionError.message}`);
    }

    // 2. Ask GPT for behavioral interview feedback
    console.log('🤖 Generating feedback...');
    const prompt = `You are an expert behavioral interview coach. Provide detailed, constructive feedback on this answer to the behavioral interview question.

Question: "${question}"

Answer: "${answer}"

Please provide feedback covering:
1. Structure (STAR method - Situation, Task, Action, Result)
2. Clarity and communication
3. Specific examples and quantifiable results
4. Areas for improvement
5. Overall rating (1-10)

Format your response in markdown for better readability.`;

    const feedbackResponse = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 800
    });

    const feedback = feedbackResponse.choices[0].message.content;
    console.log('✅ Generated feedback');

    res.json({ success: true, answer, feedback });
  } catch (err) {
    console.error('❌ Voice feedback error:', err.message);
    console.error('❌ Full error:', err);
    if (err.message.includes('audio')) {
      res.status(400).json({ success: false, error: 'Audio processing failed. Please try again.' });
    } else if (err.message.includes('API')) {
      res.status(500).json({ success: false, error: 'AI service error. Please try again.' });
    } else {
      res.status(500).json({ success: false, error: 'Failed to process voice feedback' });
    }
  }
});

module.exports = router;
