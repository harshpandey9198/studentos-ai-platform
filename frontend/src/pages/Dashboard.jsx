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
    { title: "AI Chat", desc: "Ask coding, placement, and study questions.", link: "/ai-chat", icon: "💬" },
    { title: "Notes Generator", desc: "Generate short notes instantly for any topic.", link: "/notes-generator", icon: "📄" },
    { title: "Quiz Generator", desc: "Create quizzes to test your knowledge.", link: "/quiz-generator", icon: "❓" },
    { title: "Study Planner", desc: "Get a personalized study plan for your goals.", link: "/study-planner", icon: "📅" },
    { title: "Resume Analyzer", desc: "Improve your resume with AI suggestions.", link: "/resume-analyzer", icon: "📌" },
    { title: "Task Manager", desc: "Plan and organize your study tasks.", link: "/task-manager", icon: "✅" },
    { title: "Interview Coach", desc: "Practice HR and technical interview questions.", link: "/interview-coach", icon: "🎤" },
    { title: "Analytics", desc: "Track your overall progress and performance.", link: "/analytics", icon: "📊" },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-pink-100 via-white to-pink-50 text-gray-900">
      <aside className="w-[290px] bg-white/80 backdrop-blur-xl border-r border-pink-100 shadow-xl p-6">
        <div className="text-center mt-6">
          <div className="text-5xl mb-3">🎓</div>
          <h1 className="text-4xl font-extrabold">
            <span className="text-gray-900">Student</span>
            <span className="text-pink-500">OS</span>
          </h1>
          <p className="text-gray-500 mt-2">AI Student Platform</p>
        </div>

        <nav className="mt-10 space-y-3">
          <Link to="/dashboard" className="block bg-gradient-to-r from-pink-500 to-pink-400 text-white px-5 py-3 rounded-2xl font-bold shadow-lg">
            Dashboard
          </Link>

          {tools.slice(0, 6).map((tool) => (
            <Link key={tool.title} to={tool.link} className="block text-gray-600 hover:text-pink-500 hover:bg-pink-50 px-5 py-3 rounded-2xl transition">
              {tool.title}
            </Link>
          ))}
        </nav>

        <button onClick={handleLogout} className="w-full mt-10 bg-gradient-to-r from-pink-500 to-pink-400 text-white py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition">
          Logout
        </button>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Welcome back, Harsh! 👋</h2>
            <p className="text-gray-500 mt-2">Manage your study and AI tools in one place.</p>
          </div>

          <div className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-lg">
            H
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
          <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-6">
            <h3 className="text-gray-600 font-semibold">AI Tools Used</h3>
            <p className="text-3xl font-bold mt-3 text-gray-900">5+</p>
            <p className="text-pink-500 text-sm mt-2">Keep exploring!</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-6">
            <h3 className="text-gray-600 font-semibold">Study Progress</h3>
            <p className="text-3xl font-bold mt-3 text-gray-900">72%</p>
            <div className="h-2 bg-gray-200 rounded-full mt-4">
              <div className="h-2 bg-blue-500 rounded-full w-[72%]"></div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-6">
            <h3 className="text-gray-600 font-semibold">Interview Ready</h3>
            <p className="text-3xl font-bold mt-3 text-gray-900">80%</p>
            <div className="h-2 bg-gray-200 rounded-full mt-4">
              <div className="h-2 bg-green-500 rounded-full w-[80%]"></div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-6">
            <h3 className="text-gray-600 font-semibold">Daily Streak</h3>
            <p className="text-3xl font-bold mt-3 text-gray-900">7 Days</p>
            <p className="text-orange-500 text-sm mt-2">Awesome!</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-10 mb-5 text-gray-900">Your AI Tools</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.title} to={tool.link} className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100 hover:shadow-2xl hover:-translate-y-1 transition flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-2xl">
                {tool.icon}
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900">{tool.title}</h4>
                <p className="text-gray-500 mt-2 text-sm">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;