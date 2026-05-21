import { Link, useNavigate, Navigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      <aside className="w-72 bg-[#0b0b0b] border-r border-gray-800 p-6">
        <h1 className="text-3xl font-bold text-cyan-400">StudentOS AI</h1>
        <p className="text-gray-500 mt-2">AI Student Dashboard</p>

        <nav className="mt-10 space-y-3">
          <Link to="/dashboard" className="block bg-cyan-400 text-black px-4 py-3 rounded-xl font-semibold">
            Dashboard
          </Link>
          <Link to="/ai-chat" className="block text-gray-400 px-4 py-3 hover:bg-[#1a1a1a] rounded-xl">
            AI Chat
          </Link>
          <Link to="/notes-generator" className="block text-gray-400 px-4 py-3 hover:bg-[#1a1a1a] rounded-xl">
            Notes Generator
          </Link>
          <Link to="/interview-coach" className="block text-gray-400 px-4 py-3 hover:bg-[#1a1a1a] rounded-xl">
            Interview Coach
          </Link>
          <Link to="/resume-analyzer" className="block text-gray-400 px-4 py-3 hover:bg-[#1a1a1a] rounded-xl">
            Resume Analyzer
          </Link>
        </nav>

        <button onClick={handleLogout} className="w-full mt-10 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold">
          Logout
        </button>
      </aside>

      <main className="flex-1 p-10">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-5xl font-bold">Welcome Back 👋</h2>
            <p className="text-gray-400 mt-3">
              Manage your study, career, and AI tools in one place.
            </p>
          </div>

          <div className="w-14 h-14 rounded-full bg-cyan-400 text-black flex items-center justify-center font-bold text-xl">
            H
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-[#111] border border-gray-800 p-6 rounded-3xl">
            <h3 className="text-cyan-400 text-xl font-semibold">AI Tools</h3>
            <p className="text-5xl font-bold mt-5">5+</p>
          </div>

          <div className="bg-[#111] border border-gray-800 p-6 rounded-3xl">
            <h3 className="text-cyan-400 text-xl font-semibold">Study Progress</h3>
            <p className="text-5xl font-bold mt-5">72%</p>
          </div>

          <div className="bg-[#111] border border-gray-800 p-6 rounded-3xl">
            <h3 className="text-cyan-400 text-xl font-semibold">Interview Readiness</h3>
            <p className="text-5xl font-bold mt-5">80%</p>
          </div>
        </div>

        <h3 className="text-3xl font-bold mt-12 mb-6">Quick Actions</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/ai-chat" className="bg-[#111] border border-gray-800 hover:border-cyan-400 p-7 rounded-3xl transition">
            <h4 className="text-2xl font-bold text-cyan-400">AI Chat</h4>
            <p className="text-gray-400 mt-4">Ask coding, placement, and study questions.</p>
          </Link>

          <Link to="/notes-generator" className="bg-[#111] border border-gray-800 hover:border-cyan-400 p-7 rounded-3xl transition">
            <h4 className="text-2xl font-bold text-cyan-400">Notes Generator</h4>
            <p className="text-gray-400 mt-4">Generate short notes for exam preparation.</p>
          </Link>

          <Link to="/interview-coach" className="bg-[#111] border border-gray-800 hover:border-cyan-400 p-7 rounded-3xl transition">
            <h4 className="text-2xl font-bold text-cyan-400">Interview Coach</h4>
            <p className="text-gray-400 mt-4">Practice HR and technical questions.</p>
          </Link>

          <Link to="/resume-analyzer" className="bg-[#111] border border-gray-800 hover:border-cyan-400 p-7 rounded-3xl transition">
            <h4 className="text-2xl font-bold text-cyan-400">Resume Analyzer</h4>
            <p className="text-gray-400 mt-4">Improve your resume for internships.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;