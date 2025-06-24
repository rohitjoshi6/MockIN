const axios = require("axios");
require("dotenv").config();

axios.post("https://judge0-ce.p.rapidapi.com/submissions", {
  source_code: 'print("Hello")',
  language_id: 71, // Python
  stdin: "",
}, {
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": process.env.JUDGE0_API_KEY,
    "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
  }
})
.then(res => console.log("✅ It works:", res.data))
.catch(err => {
  console.error("❌ Failed:", err.response?.status, err.response?.data || err.message);
});
