function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-bold text-cyan-400">StudentOS AI</h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#">Features</a>
          <a href="#">Roadmap</a>
          <a href="#">Dashboard</a>
        </div>

        <button className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold">
          Get Started
        </button>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="text-cyan-400 mb-4">
          AI-Powered Student Productivity Platform
        </p>

        <h2 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Your Personal AI Operating System for Study, Skills and Placements
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl text-lg">
          Plan your studies, analyze your resume, prepare for interviews, track placement progress,
          and learn smarter with Generative AI.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-cyan-400 text-black px-7 py-3 rounded-full font-semibold">
            Start Building
          </button>
          <button className="border border-gray-600 px-7 py-3 rounded-full text-gray-300">
            View Features
          </button>
        </div>
      </section>

      <section className="px-10 py-20">
        <h3 className="text-4xl font-bold text-center mb-14">
          Powerful AI Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#111] border border-gray-800 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h4 className="text-2xl font-semibold mb-4 text-cyan-400">
              AI Resume Analyzer
            </h4>
            <p className="text-gray-400">
              Upload your resume and get ATS score, skill analysis, and improvement suggestions powered by AI.
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h4 className="text-2xl font-semibold mb-4 text-cyan-400">
              AI Interview Coach
            </h4>
            <p className="text-gray-400">
              Practice HR and technical interviews with real-time AI feedback and performance analysis.
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h4 className="text-2xl font-semibold mb-4 text-cyan-400">
              AI Study Planner
            </h4>
            <p className="text-gray-400">
              Generate personalized learning roadmaps based on your goals, skills, and placement targets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;