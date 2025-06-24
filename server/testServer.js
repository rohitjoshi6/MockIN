const axios = require("axios");

async function testServer() {
  try {
    console.log("🔍 Testing server endpoints...");
    
    // Test basic endpoint
    console.log("📡 Testing basic endpoint...");
    const basicTest = await axios.get("http://localhost:3001/");
    console.log("✅ Basic endpoint:", basicTest.data);
    
    // Test API test endpoint
    console.log("📡 Testing API test endpoint...");
    const apiTest = await axios.get("http://localhost:3001/api/test");
    console.log("✅ API test endpoint:", apiTest.data);
    
    // Test evaluate endpoint
    console.log("📡 Testing evaluate endpoint...");
    const evaluateTest = await axios.post("http://localhost:3001/api/evaluate", {
      code: '#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello World!" << endl;\n  return 0;\n}',
      language: "cpp",
      stdin: ""
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log("✅ Evaluate endpoint:", evaluateTest.data);
    
  } catch (error) {
    console.error("❌ Error occurred:");
    console.error("Status:", error.response?.status);
    console.error("Status Text:", error.response?.statusText);
    console.error("Data:", error.response?.data);
    console.error("Message:", error.message);
    console.error("Code:", error.code);
  }
}

testServer();
