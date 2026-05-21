function StudyPlanner() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400">
        AI Study Planner
      </h1>

      <p className="text-gray-400 mt-4 text-lg">
        Generate personalized study roadmaps using AI.
      </p>

      <div className="mt-12 bg-[#111] border border-gray-800 rounded-3xl p-10">

        <input
          type="text"
          placeholder="Enter your goal (e.g. Crack TCS NQT)"
          className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
        />

        <button className="mt-8 bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold">
          Generate Roadmap
        </button>

      </div>

      <div className="mt-12 bg-[#111] border border-gray-800 rounded-3xl p-8">

        <h2 className="text-2xl text-cyan-400 font-semibold">
          AI Generated Plan
        </h2>

        <ul className="mt-6 space-y-4 text-gray-400">

          <li>✅ Learn Percentages and Profit & Loss</li>

          <li>✅ Practice SQL Queries Daily</li>

          <li>✅ Solve 2 DSA Problems Everyday</li>

          <li>✅ Prepare Java + React Interview Questions</li>

          <li>✅ Build Full Stack Projects</li>

        </ul>

      </div>

    </div>
  );
}

export default StudyPlanner;