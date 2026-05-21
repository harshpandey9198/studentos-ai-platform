function NotesGenerator() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400">
        AI Notes Generator
      </h1>

      <p className="text-gray-400 mt-4 text-lg">
        Upload PDFs or topics and generate smart AI notes.
      </p>

      <div className="mt-12 bg-[#111] border border-gray-800 rounded-3xl p-10">

        <input
          type="file"
          className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-6"
        />

        <textarea
          placeholder="Or type any topic..."
          className="w-full mt-8 bg-black border border-gray-700 rounded-2xl p-5 h-40 outline-none focus:border-cyan-400"
        />

        <button className="mt-8 bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold">
          Generate Notes
        </button>

      </div>

      <div className="mt-12 bg-[#111] border border-gray-800 rounded-3xl p-8">

        <h2 className="text-2xl text-cyan-400 font-semibold">
          AI Generated Notes
        </h2>

        <p className="text-gray-400 mt-6 leading-8">
          Machine Learning is a branch of Artificial Intelligence
          that enables systems to learn from data without being
          explicitly programmed...
        </p>

      </div>

    </div>
  );
}

export default NotesGenerator;