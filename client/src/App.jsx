import { useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [code, setCode] = useState(`// Write your code here\n#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello MockIN!" << endl;\n  return 0;\n}`);
  const [explanation, setExplanation] = useState("");
  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setOutput("");
    setFeedback("");

    try {
      // 1. Evaluate code using Judge0
      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          language: "cpp",
          stdin: "",
        }),
      });

      const data = await response.json();

      if (data.success) {
        const result = data.result.stdout || data.result.stderr || "No output.";
        setOutput(result);
        console.log("Execution Result:", result);

        // 2. Send explanation to OpenAI for feedback
        const feedbackResponse = await fetch("/api/feedback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code,
            explanation,
            problem: "Sample Problem: Reverse a linked list", // replace with actual
          }),
        });

        const feedbackData = await feedbackResponse.json();
        if (feedbackData.success) {
          setFeedback(feedbackData.feedback);
        } else {
          // Handle different error types
          if (feedbackResponse.status === 429) {
            setFeedback("⚠️ OpenAI quota exceeded. The AI feedback feature is temporarily unavailable due to usage limits.");
          } else if (feedbackResponse.status === 401) {
            setFeedback("🔑 OpenAI API key issue. Please check the server configuration.");
          } else {
            setFeedback(`❌ Failed to get feedback from AI: ${feedbackData.error || 'Unknown error'}`);
          }
        }
      } else {
        alert("❌ Code execution failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-700">MockIN – Coding Interview Simulator</h1>

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

        {/* Explanation Input */}
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="6"
          placeholder="Explain your approach here..."
          value={explanation}
          onChange={(e) => setExplanation(e.target.value)}
        />

        {/* Submit Button */}
        <div className="text-center">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`px-6 py-3 text-white rounded-xl font-semibold transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Evaluating..." : "Submit Answer"}
          </button>
        </div>

        {/* Code Output */}
        {output && (
          <div className="bg-white p-4 rounded-xl shadow border">
            <h2 className="text-xl font-semibold text-green-700 mb-2">💡 Code Output</h2>
            <pre className="whitespace-pre-wrap text-sm text-gray-800">{output}</pre>
          </div>
        )}

        {/* LLM Feedback */}
        {feedback && (
          <div className="bg-white p-4 rounded-xl shadow border">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">🧠 AI Feedback</h2>
            <pre className="whitespace-pre-wrap text-sm text-gray-800">{feedback}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
