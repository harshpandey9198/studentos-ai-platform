function ResumeAnalyzer() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400">
        AI Resume Analyzer
      </h1>

      <p className="text-gray-400 mt-4 text-lg">
        Upload your resume and get AI-powered analysis instantly.
      </p>

      <div className="mt-12 bg-[#111] border border-gray-800 rounded-3xl p-10 max-w-3xl">

        <input
          type="file"
          className="w-full bg-black border border-gray-700 rounded-xl px-4 py-6"
        />

        <button className="mt-8 bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold">
          Analyze Resume
        </button>

      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">
          <h2 className="text-2xl text-cyan-400 font-semibold">
            ATS Score
          </h2>

          <p className="text-6xl font-bold mt-6">
            84%
          </p>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">
          <h2 className="text-2xl text-cyan-400 font-semibold">
            Skills Found
          </h2>

          <p className="text-gray-400 mt-6">
            React, Java, Spring Boot, MySQL
          </p>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-3xl p-8">
          <h2 className="text-2xl text-cyan-400 font-semibold">
            AI Suggestions
          </h2>

          <p className="text-gray-400 mt-6">
            Add deployment projects and Docker skills.
          </p>
        </div>

      </div>

    </div>
  );
}

export default ResumeAnalyzer;