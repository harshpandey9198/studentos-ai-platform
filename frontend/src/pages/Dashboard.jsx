import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <div className="w-72 bg-[#0f0f0f] border-r border-gray-800 p-6">
        <h1 className="text-3xl font-bold text-cyan-400">StudentOS AI</h1>

        <div className="mt-10 space-y-4">
          <Link to="/dashboard" className="block bg-cyan-400 text-black px-4 py-3 rounded-xl font-semibold">
            Dashboard
          </Link>

          <Link to="/resume-analyzer" className="block text-gray-400 px-4 py-3 hover:bg-[#1a1a1a] rounded-xl">
            AI Resume Analyzer
          </Link>

          <Link to="/interview-coach" className="block text-gray-400 px-4 py-3 hover:bg-[#1a1a1a] rounded-xl">
            AI Interview Coach
          </Link>

          <Link to="/study-planner" className="block text-gray-400 px-4 py-3 hover:bg-[#1a1a1a] rounded-xl">
            AI Study Planner
          </Link>

          <Link to="/notes-generator" className="block text-gray-400 px-4 py-3 hover:bg-[#1a1a1a] rounded-xl">
            AI Notes Generator
          </Link>

          <Link to="/task-manager" className="block text-gray-400 px-4 py-3 hover:bg-[#1a1a1a] rounded-xl">
            AI Task Manager
          </Link>

          <Link to="/analytics" className="block text-gray-400 px-4 py-3 hover:bg-[#1a1a1a] rounded-xl">
            AI Analytics
          </Link>

          <Link to="/ai-chat" className="block text-gray-400 px-4 py-3 hover:bg-[#1a1a1a] rounded-xl">
            AI Chat Assistant
          </Link>
        </div>
      </div>

      <div className="flex-1 p-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-5xl font-bold">Welcome Back 👋</h2>
            <p className="text-gray-400 mt-3">
              Your AI-powered productivity dashboard
            </p>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#111] border border-gray-800 rounded-xl px-5 py-3 outline-none focus:border-cyan-400"
            />

            <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold">
              H
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#111] border border-gray-800 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h3 className="text-2xl font-semibold text-cyan-400">
              Resume Score
            </h3>
            <p className="text-6xl font-bold mt-6">82%</p>
          </div>

          <div className="bg-[#111] border border-gray-800 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h3 className="text-2xl font-semibold text-cyan-400">
              Interview Readiness
            </h3>
            <p className="text-6xl font-bold mt-6">76%</p>
          </div>

          <div className="bg-[#111] border border-gray-800 p-8 rounded-3xl hover:border-cyan-400 transition">
            <h3 className="text-2xl font-semibold text-cyan-400">
              Study Progress
            </h3>
            <p className="text-6xl font-bold mt-6">64%</p>
          </div>

          <Link
            to="/ai-chat"
            className="bg-[#111] border border-cyan-400 p-8 rounded-3xl hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-cyan-400">
              AI Chat
            </h3>
            <p className="text-gray-400 mt-6">
              Ask AI coding, placement, and study questions.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;