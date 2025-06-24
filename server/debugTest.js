const axios = require("axios");
require("dotenv").config();

async function testAPI() {
  console.log("🔍 Testing Judge0 API...");
  console.log("API Key loaded:", process.env.JUDGE0_API_KEY ? "Yes" : "No");
  
  try {
    // Test submission
    console.log("📤 Submitting code...");
    const response = await axios.post("https://judge0-ce.p.rapidapi.com/submissions", {
      source_code: '#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello World!" << endl;\n  return 0;\n}',
      language_id: 54, // C++
      stdin: "",
    }, {
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": process.env.JUDGE0_API_KEY,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
      }
    });

    console.log("✅ Submission successful:", response.data);
    const token = response.data.token;

    // Wait a bit then get result
    console.log("⏳ Waiting for execution...");
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log("📥 Getting result...");
    const result = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${token}`, {
      headers: {
        "X-RapidAPI-Key": process.env.JUDGE0_API_KEY,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
      }
    });

    console.log("🎉 Result:", result.data);
    
  } catch (error) {
    console.error("❌ Error occurred:");
    console.error("Status:", error.response?.status);
    console.error("Status Text:", error.response?.statusText);
    console.error("Data:", error.response?.data);
    console.error("Message:", error.message);
  }
}

testAPI();
