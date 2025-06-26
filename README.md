# MockIN - AI-Powered Mock Interview Platform

## 🔒 Security Setup (IMPORTANT!)

### API Key Configuration

**⚠️ NEVER commit your `.env` files to version control!**

1. **Copy the example files:**
   ```bash
   cp server/.env.example server/.env
   cp client/.env.example client/.env
   ```

2. **Get your API keys:**
   - **OpenAI API Key**: Get from [OpenAI Platform](https://platform.openai.com/api-keys)
   - **Judge0 API Key**: Get from [RapidAPI Judge0](https://rapidapi.com/judge0-official/api/judge0-ce)

3. **Update the `.env` files with your actual keys:**
   ```bash
   # server/.env
   OPENAI_API_KEY=sk-proj-your-actual-openai-key-here
   JUDGE0_API_KEY=your-actual-judge0-key-here
   
   # client/.env  
   OPENAI_API_KEY=sk-proj-your-actual-openai-key-here
   ```

4. **Verify protection:**
   ```bash
   git status
   # Make sure .env files are NOT listed as staged for commit
   ```

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd MockIN
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables** (see Security Setup above)

## 🚀 Running the Application

1. **Start the server:**
   ```bash
   cd server
   npm run dev
   ```

2. **Start the client:**
   ```bash
   cd client
   npm run dev
   ```

## 🛡️ Security Best Practices

- ✅ `.env` files are in `.gitignore`
- ✅ Example files (`.env.example`) are committed
- ✅ Actual API keys are never committed
- 🔄 **Rotate API keys if ever accidentally exposed**

## 📁 Project Structure

```
MockIN/
├── client/          # React frontend
├── server/          # Express backend
├── .gitignore       # Git ignore rules
└── README.md        # This file
```

## 🔧 Development

- **Server**: Runs on `http://localhost:3001`
- **Client**: Runs on `http://localhost:5173`
- **API Routes**: 
  - `/api/evaluate` - Code evaluation
  - `/api/feedback` - AI feedback

## 🆘 If API Keys Are Compromised

1. **Immediately rotate/regenerate your API keys**
2. **Check git history:** `git log --oneline`
3. **If keys were committed, consider making repository private temporarily**
4. **Update all instances with new keys**
