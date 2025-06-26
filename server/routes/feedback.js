const express = require('express');
const router = express.Router();
const { evaluateExplanation } = require('../controllers/feedbackController');

// GET route for testing
router.get('/', (req, res) => {
  res.json({ 
    message: "Feedback API is working!", 
    usage: "Send POST request with { code, explanation, problem } to get AI feedback",
    timestamp: new Date().toISOString()
  });
});

// POST route for actual feedback evaluation
router.post('/', evaluateExplanation);

module.exports = router;
