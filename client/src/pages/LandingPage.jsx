import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center px-6">
      <div className="text-center animate-fade-up space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 drop-shadow-lg">
          MockIN
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 font-light max-w-xl mx-auto">
          Elevate your coding interview prep with real-time evaluation and AI-powered feedback.
        </p>

        <button
          onClick={() => navigate('/interview')}
          className="mt-4 px-8 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-xl hover:shadow-fuchsia-400/40 hover:scale-105 transition-all duration-300 ease-in-out"
        >
          🚀 Try It
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
