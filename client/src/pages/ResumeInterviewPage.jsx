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
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white px-4 py-10 text-gray-900 space-y-10">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 drop-shadow">
        MockIN – Behavioral Interview
      </h1>

      {/* Resume Upload */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 text-center space-y-5 border border-gray-200">
        <label className="block cursor-pointer border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-indigo-500 transition duration-200">
          <input type="file" accept="application/pdf,text/plain" onChange={handleFileChange} hidden />
          <div className="flex flex-col items-center space-y-2">
            <FiUploadCloud size={40} className="text-indigo-500" />
            <span className="text-gray-700 font-medium">
              {resume ? resume.name : 'Click or drag to upload resume (PDF or TXT)'}
            </span>
          </div>
        </label>

        <button
          onClick={handleGenerateQuestion}
          disabled={!resume || isGenerating}
          className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 disabled:bg-gray-400 transition"
        >
          {isGenerating ? 'Generating...' : '🎯 Generate Question'}
        </button>
      </div>

      {/* Question Box */}
      {question && (
        <div className="max-w-2xl mx-auto bg-indigo-50 border border-indigo-200 rounded-xl p-6 shadow text-center space-y-4">
          <h2 className="text-lg font-semibold text-indigo-800">🧠 AI Behavioral Question:</h2>
          <p className="text-gray-800 text-lg">{question}</p>

          {isRecording ? (
            <button
              onClick={handleStopRecording}
              className="bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 shadow transition"
            >
              <FiMicOff className="inline mr-2" /> Stop Recording ({recordingTime}s)
            </button>
          ) : (
            <button
              onClick={handleStartRecording}
              className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 shadow transition"
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
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            {isEvaluating ? 'Evaluating...' : '🚀 Submit Answer'}
          </button>
        </div>
      )}

      {/* Final Output */}
      {(answer || feedback) && (
        <div className="w-full max-w-6xl mx-auto space-y-6">
          {/* Answer Box */}
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">🎤 Transcribed Answer:</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{answer}</p>
          </div>

          {/* Feedback Box */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow border border-yellow-300">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">🧠 AI Feedback:</h3>
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


