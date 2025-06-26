const axios = require("axios");

async function testFeedbackAPI() {
  try {
    console.log("🔍 Testing Feedback API endpoints...");
    
    // Test GET endpoint
    console.log("📡 Testing GET /api/feedback...");
    const getTest = await axios.get("http://localhost:3001/api/feedback");
    console.log("✅ GET endpoint:", getTest.data);
    
    // Test POST endpoint (will fail without real OpenAI key)
    console.log("📡 Testing POST /api/feedback...");
    const postTest = await axios.post("http://localhost:3001/api/feedback", {
      code: '#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello World!" << endl;\n  return 0;\n}',
      explanation: "This is a simple C++ program that prints Hello World to the console.",
      problem: "Write a program that prints Hello World"
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log("✅ POST endpoint:", postTest.data);
    
  } catch (error) {
    console.error("❌ Error occurred:");
    console.error("Status:", error.response?.status);
    console.error("Status Text:", error.response?.statusText);
    console.error("Data:", error.response?.data);
    console.error("Message:", error.message);
  }
}

testFeedbackAPI();
