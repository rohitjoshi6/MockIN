const OpenAI = require('openai');
const multer = require('multer');
const pdfParse = require('pdf-parse');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Configure multer for memory storage
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    // Allow PDF files and text files for development/testing
    if (file.mimetype === 'application/pdf' || file.mimetype === 'text/plain') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and text files are allowed. Please upload a PDF or TXT file.'), false);
    }
  }
});

exports.uploadMiddleware = (req, res, next) => {
  upload.single('resume')(req, res, (err) => {
    if (err) {
      console.error('❌ File upload error:', err.message);
      return res.status(400).json({ 
        success: false, 
        error: err.message || 'File upload failed' 
      });
    }
    next();
  });
};

exports.generateBehavioralQuestion = async (req, res) => {
  try {
    console.log('📄 Resume upload request received');
    
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'Resume PDF file is required' });
    }

    console.log('📄 File details:', {
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size
    });

    // Extract text from PDF or text file
    console.log('🔍 Extracting text from file...');
    let resumeText;
    try {
      if (req.file.mimetype === 'application/pdf') {
        const pdfData = await pdfParse(req.file.buffer);
        resumeText = pdfData.text;
      } else if (req.file.mimetype === 'text/plain') {
        // Handle text files directly
        resumeText = req.file.buffer.toString('utf-8');
      } else {
        throw new Error('Unsupported file type');
      }
    } catch (parseError) {
      console.error('❌ File parsing error:', parseError.message);
      return res.status(400).json({ 
        success: false, 
        error: 'Could not parse file. Please ensure it is a valid PDF with readable text.' 
      });
    }

    if (!resumeText || resumeText.trim().length < 50) {
      return res.status(400).json({ 
        success: false, 
        error: 'Could not extract enough text from PDF. Please ensure the PDF contains readable text.' 
      });
    }

    console.log('📝 Extracted text length:', resumeText.length);

    // Generate behavioral question using OpenAI
    console.log('🤖 Generating behavioral question...');
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { 
          role: "system", 
          content: "You are an expert behavioral interview coach. Generate challenging, specific behavioral interview questions based on the candidate's resume. Focus on their experience, skills, and background. Ask about situations they might have encountered based on their work history." 
        },
        { 
          role: "user", 
          content: `Based on this resume, generate ONE specific behavioral interview question that would be relevant to this candidate's experience:\n\n${resumeText.substring(0, 3000)}` // Limit text to avoid token limits
        }
      ],
      max_tokens: 200,
      temperature: 0.7
    });

    const question = completion.choices[0].message.content.trim();
    console.log('✅ Generated question:', question);

    res.json({ success: true, question });
  } catch (err) {
    console.error('❌ Error generating question:', err.message);
    console.error('❌ Full error:', err);
    if (err.message.includes('PDF')) {
      res.status(400).json({ success: false, error: 'Invalid PDF file or could not extract text' });
    } else if (err.message.includes('API')) {
      res.status(500).json({ success: false, error: 'OpenAI API error. Please try again.' });
    } else {
      res.status(500).json({ success: false, error: 'Failed to generate question' });
    }
  }
};
