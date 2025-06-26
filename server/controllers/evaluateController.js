const axios = require('axios');

exports.evaluateCode = async (req, res) => {
  console.log("Hit /api/evaluate route");
  console.log("Incoming body:", req.body);  
  const { code, language = 'cpp', stdin = '' } = req.body;

  // Validate input
  if (!code || code.trim() === '') {
    return res.status(400).json({ success: false, error: 'Code is required' });
  }

  // Check if API key is loaded
  if (!process.env.JUDGE0_API_KEY) {
    console.error('JUDGE0_API_KEY not found in environment variables');
    return res.status(500).json({ success: false, error: 'API configuration error' });
  }

  try {
    const response = await axios.post('https://judge0-ce.p.rapidapi.com/submissions', {
      source_code: code,
      language_id: 54, // 54 = C++, see Judge0 docs for others
      stdin,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': process.env.JUDGE0_API_KEY,
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
      },
    });

    const token = response.data.token;
    console.log('✅ Code submitted successfully, token:', token);

    // Poll result with proper error handling
    const getResult = async (attempts = 0) => {
      try {
        const res = await axios.get(`https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true`, {
          headers: {
            'X-RapidAPI-Key': process.env.JUDGE0_API_KEY,
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          },
        });
        
        const result = res.data;
        console.log('📥 Result received:', result.status);
        
        // Decode base64 encoded fields
        if (result.stdout) {
          result.stdout = Buffer.from(result.stdout, 'base64').toString('utf8');
        }
        if (result.stderr) {
          result.stderr = Buffer.from(result.stderr, 'base64').toString('utf8');
        }
        if (result.compile_output) {
          result.compile_output = Buffer.from(result.compile_output, 'base64').toString('utf8');
        }
        
        // If still processing, wait and try again (max 10 attempts = 20 seconds)
        if (result.status.id <= 2 && attempts < 10) {
          console.log('⏳ Still processing, waiting...');
          await new Promise(resolve => setTimeout(resolve, 2000));
          return await getResult(attempts + 1);
        }
        
        return result;
      } catch (error) {
        console.error('Error getting result:', error.response?.data || error.message);
        throw error;
      }
    };

    const result = await getResult();

    res.json({ success: true, result });
  } catch (err) {
    console.error('Error details:', {
      message: err.message,
      status: err.response?.status,
      statusText: err.response?.statusText,
      data: err.response?.data
    });
    
    if (err.response?.status === 403) {
      res.status(403).json({ 
        success: false, 
        error: 'API access forbidden - check your API key and subscription' 
      });
    } else if (err.response?.status === 429) {
      res.status(429).json({ 
        success: false, 
        error: 'Rate limit exceeded - please try again later' 
      });
    } else {
      res.status(500).json({ success: false, error: 'Code execution failed' });
    }
  }
};
