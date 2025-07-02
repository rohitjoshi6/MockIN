import { useState, useRef, useEffect } from 'react';
import { FiUploadCloud, FiMic, FiMicOff } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ResumeInterview() {
  const [resume, setResume] = useState(null);
  const [question, setQuestion] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [recordingTime, setRecordingTime] = useState(0);
  const timerRef = useRef(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
    setQuestion('');
    setAudioBlob(null);
    setAnswer('');
    setFeedback('');
  };

  const handleGenerateQuestion = async () => {
    if (!resume) return alert('Please upload your resume first.');
    setIsGenerating(true);
    setQuestion('');
    setAudioBlob(null);
    setAnswer('');
    setFeedback('');

    const formData = new FormData();
    formData.append('resume', resume);

    try {
      const res = await fetch('/api/resume/generate-question', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setQuestion(data.question);
      } else {
        alert(`❌ Failed to generate question: ${data.error || 'Unknown error'}`);
        console.error('Server error:', data.error);
      }
    } catch (err) {
      alert('❌ Network error generating question');
      console.error('Network error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      setAudioBlob(blob);
      clearInterval(timerRef.current);
      setRecordingTime(0);
    };

    recorder.start();
    setMediaRecorder(recorder);
    setIsRecording(true);

    // Start timer
    timerRef.current = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);
  };

  const handleStopRecording = () => {
    mediaRecorder.stop();
    setIsRecording(false);
  };

  const handleEvaluate = async () => {
    if (!audioBlob || !question) return;
    
    console.log('🎤 Starting evaluation...', {
      audioBlobSize: audioBlob.size,
      audioBlobType: audioBlob.type,
      questionLength: question.length
    });
    
    setIsEvaluating(true);
    const formData = new FormData();
    formData.append('audio', audioBlob);
    formData.append('question', question);

    try {
      console.log('🌐 Sending request to /api/resume/voice-feedback...');
      const res = await fetch('/api/resume/voice-feedback', {
        method: 'POST',
        body: formData,
      });
      
      console.log('📥 Response status:', res.status);
      const data = await res.json();
      console.log('📄 Response data:', data);
      
      if (data.success) {
        setAnswer(data.answer);
        setFeedback(data.feedback);
        console.log('✅ Successfully set answer and feedback');
      } else {
        alert(`❌ Failed to evaluate response: ${data.error || 'Unknown error'}`);
        console.error('Server error:', data.error);
      }
    } catch (err) {
      alert('❌ Network error evaluating response');
      console.error('Network error:', err);
    } finally {
      setIsEvaluating(false);
    }
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 text-gray-900 space-y-6">
      <h1 className="text-3xl font-bold text-center text-indigo-700">MockIN – Behavioral Interview</h1>

      {/* Resume Upload */}
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 text-center space-y-4">
        <label className="block cursor-pointer p-6 border-2 border-dashed border-gray-400 rounded-xl hover:border-indigo-500 transition">
          <input type="file" accept="application/pdf,text/plain" onChange={handleFileChange} hidden />
          <div className="flex flex-col items-center space-y-2">
            <FiUploadCloud size={40} />
            <span>{resume ? resume.name : 'Click or drag to upload resume (PDF or TXT)'}</span>
          </div>
        </label>

        <button
          onClick={handleGenerateQuestion}
          disabled={!resume || isGenerating}
          className="bg-indigo-600 text-white px-5 py-2 rounded shadow hover:bg-indigo-700 disabled:bg-gray-400"
        >
          {isGenerating ? 'Generating...' : 'Generate Question'}
        </button>
      </div>

      {/* Question + Mic */}
      {question && (
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold">🧠 {question}</h2>
          {isRecording ? (
            <button
              onClick={handleStopRecording}
              className="bg-red-600 text-white px-4 py-2 rounded-full shadow hover:bg-red-700"
            >
              <FiMicOff className="inline mr-2" /> Stop ({recordingTime}s)
            </button>
          ) : (
            <button
              onClick={handleStartRecording}
              className="bg-green-600 text-white px-4 py-2 rounded-full shadow hover:bg-green-700"
            >
              <FiMic className="inline mr-2 animate-pulse" /> Start Recording
            </button>
          )}
        </div>
      )}

      {/* Submit Button */}
      {audioBlob && question && (
        <div className="text-center">
          <button
            onClick={handleEvaluate}
            disabled={isEvaluating}
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isEvaluating ? 'Evaluating...' : 'Submit Answer'}
          </button>
        </div>
      )}

      {/* Final Output */}
      {(answer || feedback) && (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow space-y-6">
          <div>
            <h3 className="font-semibold text-gray-800">Your Answer (transcribed):</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{answer}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">AI Feedback:</h3>
            <div className="prose max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{feedback}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeInterview;


