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

      {/* Sidebar */}
      <aside className="w-60 bg-[#0b0b0b] border-r border-gray-800 p-5">

        <h1 className="text-2xl font-bold text-cyan-400">
          StudentOS AI
        </h1>

        <p className="text-gray-500 mt-1 text-sm">
          AI Student Dashboard
        </p>

        <nav className="mt-8 space-y-2">

          <Link
            to="/dashboard"
            className="block bg-cyan-400 text-black px-4 py-2 rounded-xl font-semibold"
          >
            Dashboard
          </Link>

          <Link
            to="/ai-chat"
            className="block text-gray-400 px-4 py-2 hover:bg-[#1a1a1a] rounded-xl"
          >
            AI Chat
          </Link>

          <Link
            to="/notes-generator"
            className="block text-gray-400 px-4 py-2 hover:bg-[#1a1a1a] rounded-xl"
          >
            Notes Generator
          </Link>

          <Link
            to="/interview-coach"
            className="block text-gray-400 px-4 py-2 hover:bg-[#1a1a1a] rounded-xl"
          >
            Interview Coach
          </Link>

          <Link
            to="/resume-analyzer"
            className="block text-gray-400 px-4 py-2 hover:bg-[#1a1a1a] rounded-xl"
          >
            Resume Analyzer
          </Link>

        </nav>

        <button
          onClick={handleLogout}
          className="w-full mt-8 bg-red-500 hover:bg-red-600 py-2 rounded-xl font-semibold"
        >
          Logout
        </button>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">

        {/* Header */}
        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-3xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              Manage your study and AI tools in one place.
            </p>

          </div>

          <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center font-bold text-lg">
            H
          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">

          <div className="bg-[#111] border border-gray-800 p-4 rounded-2xl">
            <h3 className="text-cyan-400 text-lg font-semibold">
              AI Tools
            </h3>

            <p className="text-3xl font-bold mt-3">
              5+
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 p-4 rounded-2xl">
            <h3 className="text-cyan-400 text-lg font-semibold">
              Study Progress
            </h3>

            <p className="text-3xl font-bold mt-3">
              72%
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 p-4 rounded-2xl">
            <h3 className="text-cyan-400 text-lg font-semibold">
              Interview Ready
            </h3>

            <p className="text-3xl font-bold mt-3">
              80%
            </p>
          </div>

        </div>

        {/* Quick Actions */}
        <h3 className="text-2xl font-bold mt-10 mb-5">
          Quick Actions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">

          <Link
            to="/ai-chat"
            className="bg-[#111] border border-gray-800 hover:border-cyan-400 p-5 rounded-2xl transition"
          >

            <h4 className="text-xl font-bold text-cyan-400">
              AI Chat
            </h4>

            <p className="text-gray-400 mt-3 text-sm">
              Ask coding, placement, and study questions.
            </p>

          </Link>

          <Link
            to="/notes-generator"
            className="bg-[#111] border border-gray-800 hover:border-cyan-400 p-5 rounded-2xl transition"
          >

            <h4 className="text-xl font-bold text-cyan-400">
              Notes Generator
            </h4>

            <p className="text-gray-400 mt-3 text-sm">
              Generate short notes for exams.
            </p>

          </Link>

          <Link
            to="/interview-coach"
            className="bg-[#111] border border-gray-800 hover:border-cyan-400 p-5 rounded-2xl transition"
          >

            <h4 className="text-xl font-bold text-cyan-400">
              Interview Coach
            </h4>

            <p className="text-gray-400 mt-3 text-sm">
              Practice HR and technical questions.
            </p>

          </Link>

          <Link
            to="/resume-analyzer"
            className="bg-[#111] border border-gray-800 hover:border-cyan-400 p-5 rounded-2xl transition"
          >

            <h4 className="text-xl font-bold text-cyan-400">
              Resume Analyzer
            </h4>

            <p className="text-gray-400 mt-3 text-sm">
              Improve your resume for internships.
            </p>

          </Link>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;