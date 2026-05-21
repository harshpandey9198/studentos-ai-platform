function Analytics() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400">
        AI Analytics
      </h1>

      <p className="text-gray-400 mt-4 text-lg">
        Track your learning and placement progress intelligently.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

        <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">
          <h2 className="text-cyan-400 text-xl">
            Tasks Completed
          </h2>

          <p className="text-5xl font-bold mt-6">
            24
          </p>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">
          <h2 className="text-cyan-400 text-xl">
            Mock Interviews
          </h2>

          <p className="text-5xl font-bold mt-6">
            12
          </p>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">
          <h2 className="text-cyan-400 text-xl">
            Resume Score
          </h2>

          <p className="text-5xl font-bold mt-6">
            84%
          </p>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">
          <h2 className="text-cyan-400 text-xl">
            Study Hours
          </h2>

          <p className="text-5xl font-bold mt-6">
            120h
          </p>
        </div>

      </div>

      <div className="mt-12 bg-[#111] border border-gray-800 rounded-3xl p-8">

        <h2 className="text-2xl text-cyan-400 font-semibold">
          AI Insights
        </h2>

        <ul className="mt-6 space-y-4 text-gray-400">

          <li>✅ Your interview performance improved by 18%</li>

          <li>✅ Focus more on DSA and System Design</li>

          <li>✅ Resume ATS score increased this week</li>

        </ul>

      </div>

    </div>
  );
}

export default Analytics;