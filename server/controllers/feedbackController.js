const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.evaluateExplanation = async (req, res) => {
  const { code, explanation, problem } = req.body;

  // Validate input
  if (!code || !explanation) {
    return res.status(400).json({ success: false, error: 'Code and explanation are required' });
  }

  // Check if API key is loaded
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
    console.error('OPENAI_API_KEY not found in environment variables');
    return res.status(500).json({ success: false, error: 'OpenAI API configuration error' });
  }

  // Temporary fallback for testing (remove this when OpenAI quota is available)
  if (process.env.USE_MOCK_FEEDBACK === 'true') {
    const mockFeedback = `
### 🤖 Mock AI Feedback (OpenAI quota exceeded)

**Code Analysis:**
• Your C++ solution looks clean and follows good practices
• The logic appears correct for the given problem
• Good use of standard iostream library

**Explanation Review:**
• ${explanation ? 'Your explanation shows understanding of the approach' : 'Consider adding more detailed explanation of your thought process'}
• Could benefit from discussing time/space complexity

**Suggestions:**
• Consider edge cases and error handling
• Add comments to explain complex logic
• Think about optimization opportunities

*Note: This is mock feedback. Real AI feedback will be available when OpenAI quota is restored.*
    `.trim();
    
    return res.json({ success: true, feedback: mockFeedback });
  }

  const prompt = `
You are an AI interviewer evaluating a student's solution to a coding question.

### Problem:
${problem || 'Code evaluation and explanation review'}

### Student's Code:
${code}

### Student's Explanation:
${explanation}

Give detailed feedback:
1. Is the approach logically correct?
2. Is the explanation clear?
3. Are any edge cases missing?
4. Any improvements or suggestions?

Respond in bullet points.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Using a more cost-effective model
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500,
    });

    const feedback = completion.choices[0].message.content;
    res.json({ success: true, feedback });
  } catch (err) {
    console.error("OpenAI error:", err.response?.data || err.message);
    
    if (err.response?.status === 401) {
      res.status(401).json({ success: false, error: "Invalid OpenAI API key" });
    } else if (err.response?.status === 429) {
      res.status(429).json({ 
        success: false, 
        error: "OpenAI quota exceeded. Please check your billing and usage limits at https://platform.openai.com/account/usage" 
      });
    } else if (err.response?.status === 400) {
      res.status(400).json({ success: false, error: "Invalid request to OpenAI API" });
    } else {
      res.status(500).json({ success: false, error: "OpenAI request failed" });
    }
  }
};
