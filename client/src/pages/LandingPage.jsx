import { useNavigate } from 'react-router-dom';
import { FaCode, FaUserTie } from 'react-icons/fa';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center px-6">
      <div className="text-center space-y-10 animate-fade-up">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 drop-shadow-lg">
          MockIN
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
          Elevate your interview prep with real-time code evaluation and AI-driven behavioral practice.
        </p>

        {/* CTA Options */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Coding CTA */}
          <div
            onClick={() => navigate('/interview')}
            className="group bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 w-72 cursor-pointer backdrop-blur-xl shadow-lg hover:shadow-fuchsia-400/40 transition-all duration-300 ease-in-out"
          >
            <FaCode className="text-4xl mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-semibold">Start Coding Practice</h2>
            <p className="text-sm text-gray-300 mt-2">
              Solve top DSA problems and get instant AI feedback.
            </p>
          </div>

          {/* Behavioral CTA */}
          <div
            onClick={() => navigate('/resume')}
            className="group bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 w-72 cursor-pointer backdrop-blur-xl shadow-lg hover:shadow-cyan-400/40 transition-all duration-300 ease-in-out"
          >
            <FaUserTie className="text-4xl mb-4 text-pink-400 group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-semibold">Behavioral Interview</h2>
            <p className="text-sm text-gray-300 mt-2">
              Upload your resume and prepare for real-world behavioral rounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
