import { useState } from 'react';
import Editor from '@monaco-editor/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import questions from '../data/neetcode150';

function InterviewPage() {
  const [topic, setTopic] = useState('');
  const [question, setQuestion] = useState(null);
  const [code, setCode] = useState('// Write your code here...');
  const [output, setOutput] = useState('');
  const [feedback, setFeedback] = useState('AI feedback will appear here...');
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handlePickRandom = () => {
    const filtered = topic ? questions.filter((q) => q.topic === topic) : questions;
    const random = filtered[Math.floor(Math.random() * filtered.length)];
    setQuestion(random);
    setCode('// Write your code here...');
    setOutput('');
    setFeedback('AI feedback will appear here...');
  };

  const handleSubmit = async () => {
    if (!question || !code.trim()) return;

    setIsEvaluating(true);
    setOutput("Evaluating...");
    setFeedback("");

    try {
      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          language: "cpp",
          stdin: "",
        }),
      });

      const data = await response.json();

      if (data.success) {
        const outputText = data.result.stdout ||
          data.result.stderr ||
          data.result.compile_output ||
          `Status: ${data.result.status?.description || 'Unknown'}\nNo output generated.`;

        setOutput(outputText);

        try {
          const feedbackResponse = await fetch("/api/feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              code,
              explanation: `I tried to solve "${question.title}". ${question.description}`,
              problem: `${question.title}: ${question.description}`,
            }),
          });

          const feedbackData = await feedbackResponse.json();
          if (feedbackData.success) {
            setFeedback(feedbackData.feedback);
          } else {
            setFeedback("❌ Failed to get AI feedback, but code executed successfully!");
          }
        } catch (feedbackErr) {
          console.error("Feedback error:", feedbackErr);
          setFeedback("❌ AI feedback unavailable, but code executed successfully!");
        }
      } else {
        setOutput(`Error: ${data.error || 'Code execution failed'}`);
        alert(`Code execution failed: ${data.error || 'Unknown error'}`);
      }
    } catch (err) {
      console.error("❌ Error during evaluation:", err);
      setOutput(`Network Error: ${err.message}`);
      alert("Network error during submission. Check console for details.");
    }

    setIsEvaluating(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6 text-gray-900">
      {/* Header */}
      <header className="text-3xl font-bold text-center text-indigo-700">
        MockIN – Coding Interview Simulator
      </header>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <select
          className="p-2 rounded border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value="">All Topics</option>
          {[...new Set(questions.map((q) => q.topic))].map((topic) => (
            <option key={topic} value={topic}>
              {topic.charAt(0).toUpperCase() + topic.slice(1)}
            </option>
          ))}
        </select>
        <button
          onClick={handlePickRandom}
          className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700 transition"
        >
          Pick Random Question
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Question Panel */}
        <div className="bg-white rounded-xl shadow p-4 space-y-3">
          {question ? (
            <>
              <h2 className="text-xl font-semibold">{question.title}</h2>
              <p>{question.description}</p>
              <div className="text-sm text-gray-700">
                <p><strong>Sample Input:</strong> {question.sampleInput}</p>
                <p><strong>Sample Output:</strong> {question.sampleOutput}</p>
              </div>
            </>
          ) : (
            <p className="text-gray-500">No question selected yet.</p>
          )}
        </div>

        {/* Code Editor */}
        <div className="border rounded-xl overflow-hidden shadow">
          <Editor
            height="300px"
            defaultLanguage="cpp"
            value={code}
            onChange={(value) => setCode(value)}
            theme="vs-dark"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          onClick={handleSubmit}
          disabled={
            isEvaluating ||
            !question ||
            !code.trim() ||
            code.trim() === '// Write your code here...'
          }
          className={`px-6 py-3 mt-4 text-white rounded shadow font-semibold transition ${
            isEvaluating || !question || !code.trim()
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {isEvaluating ? "Evaluating..." : "Submit Solution"}
        </button>
      </div>

      {/* Output & Feedback */}
      <div className="bg-white p-4 rounded-xl shadow space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">Code Output:</h3>
        <pre className="bg-gray-100 p-3 rounded text-sm whitespace-pre-wrap">
          {output || 'No output yet.'}
        </pre>

        <h3 className="text-lg font-semibold text-gray-800">AI Feedback:</h3>
        <div className="prose max-w-none">
          {isEvaluating ? (
            <div className="space-y-2 animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>
          ) : (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {feedback || 'No feedback yet.'}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </div>
  );
}

export default InterviewPage;
