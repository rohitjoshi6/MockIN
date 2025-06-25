import { useState } from "react";
import Editor from "@monaco-editor/react";

function App() {
  const [code, setCode] = useState(`// Write your code here\n#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello MockIN!" << endl;\n  return 0;\n}`);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          language: "cpp", // can be made dynamic later
          stdin: "",       // optional input
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        const output = data.result.stdout || data.result.stderr || "No output.";
        console.log("Execution Result:", output);
        alert(`💡 Code Execution Result:\n\n${output}`);
      } else {
        alert("❌ Execution failed. Try again.");
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Something went wrong while submitting code.");
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
      </div>
    </div>
  );
}

export default App;
