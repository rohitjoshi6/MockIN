import { useNavigate } from 'react-router-dom';
import { FaCode, FaUserTie } from 'react-icons/fa';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center px-6 py-12">
      <div className="text-center space-y-12 animate-fade-up">
        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
          Mock<span className="text-white">IN</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
          Your all-in-one AI-powered coding and behavioral interview simulator.
        </p>

        {/* CTA Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-6">
          {/* Coding Practice Card */}
          <div
            onClick={() => navigate('/interview')}
            className="group relative w-80 p-6 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl cursor-pointer transition-all hover:scale-105 hover:shadow-cyan-400/30"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur opacity-20 group-hover:opacity-40 transition-all duration-500 rounded-3xl" />
            <div className="relative z-10 space-y-3">
              <FaCode className="text-5xl text-cyan-300 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <h2 className="text-2xl font-semibold">Start Coding Practice</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Solve top DSA problems and get instant AI-powered feedback.
              </p>
            </div>
          </div>

          {/* Behavioral Interview Card */}
          <div
            onClick={() => navigate('/resume')}
            className="group relative w-80 p-6 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl cursor-pointer transition-all hover:scale-105 hover:shadow-pink-400/30"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 via-violet-500 to-cyan-500 blur opacity-20 group-hover:opacity-40 transition-all duration-500 rounded-3xl" />
            <div className="relative z-10 space-y-3">
              <FaUserTie className="text-5xl text-pink-300 mx-auto group-hover:scale-110 transition-transform duration-200" />
              <h2 className="text-2xl font-semibold">Behavioral Interview</h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Upload your resume and simulate real behavioral rounds.
              </p>
            </div>
          </div>
        </div>

        {/* Footer (optional) */}
        <p className="text-xs text-gray-400 pt-8 tracking-wide">Made with ❤️ by Rohit Joshi</p>
      </div>
    </div>
  );
}

export default LandingPage;
