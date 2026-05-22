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

  const tools = [
    {
      title: "AI Chat",
      desc: "Ask coding, placement, and study questions.",
      link: "/ai-chat",
      icon: "💬",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Notes Generator",
      desc: "Generate short notes instantly for any topic.",
      link: "/notes-generator",
      icon: "📄",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Quiz Generator",
      desc: "Create quizzes to test your knowledge.",
      link: "/quiz-generator",
      icon: "❓",
      color: "from-orange-400 to-pink-500",
    },
    {
      title: "Study Planner",
      desc: "Get a personalized study plan for your goals.",
      link: "/study-planner",
      icon: "📅",
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Resume Analyzer",
      desc: "Improve your resume with AI suggestions.",
      link: "/resume-analyzer",
      icon: "📌",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Task Manager",
      desc: "Plan and organize your study tasks.",
      link: "/task-manager",
      icon: "✅",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Interview Coach",
      desc: "Practice HR and technical interview questions.",
      link: "/interview-coach",
      icon: "🎤",
      color: "from-teal-400 to-cyan-500",
    },
    {
      title: "Analytics",
      desc: "Track your overall progress and performance.",
      link: "/analytics",
      icon: "📊",
      color: "from-fuchsia-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50 text-gray-900 flex">
      <aside className="w-[300px] min-h-screen bg-white/80 backdrop-blur-xl border-r border-pink-100 shadow-xl p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-60 -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-60 translate-x-16 translate-y-16"></div>

        <div className="relative text-center mt-6">
          <div className="text-5xl mb-3">🎓</div>

          <h1 className="text-4xl font-extrabold">
            <span className="text-gray-900">Student</span>
            <span className="text-pink-500">OS</span>
          </h1>

          <p className="text-gray-500 mt-2 font-medium">
            AI Student Platform
          </p>
        </div>

        <nav className="relative mt-10 space-y-3">
          <Link
            to="/dashboard"
            className="block bg-gradient-to-r from-pink-500 to-pink-400 text-white px-5 py-3 rounded-2xl font-bold shadow-lg"
          >
            Dashboard
          </Link>

          <Link
            to="/ai-chat"
            className="block text-gray-600 hover:text-pink-500 hover:bg-pink-50 px-5 py-3 rounded-2xl transition"
          >
            AI Chat
          </Link>

          <Link
            to="/notes-generator"
            className="block text-gray-600 hover:text-pink-500 hover:bg-pink-50 px-5 py-3 rounded-2xl transition"
          >
            Notes Generator
          </Link>

          <Link
            to="/quiz-generator"
            className="block text-gray-600 hover:text-pink-500 hover:bg-pink-50 px-5 py-3 rounded-2xl transition"
          >
            Quiz Generator
          </Link>

          <Link
            to="/study-planner"
            className="block text-gray-600 hover:text-pink-500 hover:bg-pink-50 px-5 py-3 rounded-2xl transition"
          >
            Study Planner
          </Link>

          <Link
            to="/resume-analyzer"
            className="block text-gray-600 hover:text-pink-500 hover:bg-pink-50 px-5 py-3 rounded-2xl transition"
          >
            Resume Analyzer
          </Link>

          <Link
            to="/task-manager"
            className="block text-gray-600 hover:text-pink-500 hover:bg-pink-50 px-5 py-3 rounded-2xl transition"
          >
            Task Manager
          </Link>

          <Link
            to="/analytics"
            className="block text-gray-600 hover:text-pink-500 hover:bg-pink-50 px-5 py-3 rounded-2xl transition"
          >
            Analytics
          </Link>
        </nav>

        <button
          onClick={handleLogout}
          className="relative w-full mt-8 bg-gradient-to-r from-pink-500 to-pink-400 text-white py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition"
        >
          Logout
        </button>

        <div className="relative mt-10 bg-white/70 border border-pink-100 rounded-3xl p-5 shadow-sm">
          <p className="text-sm font-bold text-gray-900">
            Small progress every day leads to big results 🚀
          </p>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Welcome back, Harsh! 👋
            </h2>

            <p className="text-gray-500 mt-2 text-lg">
              Manage your learning journey with AI tools.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block bg-white border border-pink-100 shadow-sm rounded-2xl px-5 py-3 text-gray-600">
              🚀 Production Ready
            </div>

            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-400 text-white flex items-center justify-center font-bold text-lg shadow-lg">
              H
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
          <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-6 hover:-translate-y-1 transition">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-2xl">
              🤖
            </div>

            <h3 className="text-gray-600 font-semibold mt-4">
              AI Tools Used
            </h3>

            <p className="text-3xl font-bold mt-2 text-gray-900">
              5+
            </p>

            <p className="text-pink-500 text-sm mt-2">
              Keep exploring!
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-6 hover:-translate-y-1 transition">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl">
              📈
            </div>

            <h3 className="text-gray-600 font-semibold mt-4">
              Study Progress
            </h3>

            <p className="text-3xl font-bold mt-2 text-gray-900">
              72%
            </p>

            <div className="h-2 bg-gray-200 rounded-full mt-4">
              <div className="h-2 bg-blue-500 rounded-full w-[72%]"></div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-6 hover:-translate-y-1 transition">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-2xl">
              🎯
            </div>

            <h3 className="text-gray-600 font-semibold mt-4">
              Interview Ready
            </h3>

            <p className="text-3xl font-bold mt-2 text-gray-900">
              80%
            </p>

            <div className="h-2 bg-gray-200 rounded-full mt-4">
              <div className="h-2 bg-green-500 rounded-full w-[80%]"></div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-6 hover:-translate-y-1 transition">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-2xl">
              ⚡
            </div>

            <h3 className="text-gray-600 font-semibold mt-4">
              Daily Streak
            </h3>

            <p className="text-3xl font-bold mt-2 text-gray-900">
              7 Days
            </p>

            <p className="text-orange-500 text-sm mt-2">
              Awesome!
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10 mb-5">
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900">
              Your AI Tools
            </h3>

            <div className="w-12 h-1 bg-pink-500 rounded-full mt-2"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              to={tool.link}
              className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100 hover:shadow-2xl hover:-translate-y-1 transition flex items-center gap-5"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-3xl shadow-lg`}
              >
                {tool.icon}
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900">
                  {tool.title}
                </h4>

                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <div className="ml-auto text-pink-500 text-xl">
                →
              </div>
            </Link>
          ))}

          <div className="rounded-3xl p-6 shadow-lg bg-gradient-to-br from-indigo-900 to-purple-700 text-white relative overflow-hidden">
            <div className="absolute right-4 bottom-4 text-7xl opacity-30">
              🚀
            </div>

            <h4 className="text-xl font-bold relative">
              Keep Learning
            </h4>

            <p className="mt-3 text-purple-100 relative">
              Small progress everyday creates big results.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-400 mt-10">
          © 2026 StudentOS AI Platform. Built by Harsh Pandey.
        </p>
      </main>
    </div>
  );
}

export default Dashboard;