const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// ✅ Simple CORS configuration
app.use(cors());

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Add logging middleware to debug requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// ✅ Evaluate route
const evaluateRoutes = require("./routes/evaluate");
app.use("/api/evaluate", evaluateRoutes);

// ✅ Feedback route
const feedbackRoutes = require('./routes/feedback');
app.use('/api/feedback', feedbackRoutes);

// Test endpoint
app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!", timestamp: new Date().toISOString() });
});

app.get("/", (req, res) => {
  res.send("MockIN backend running 🚀");
});

// Resume route
const resumeRoutes = require('./routes/resume');
app.use('/api/resume', resumeRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
