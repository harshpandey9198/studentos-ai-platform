function TaskManager() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400">
        AI Task Manager
      </h1>

      <p className="text-gray-400 mt-4 text-lg">
        Organize your study and placement tasks smartly.
      </p>

      <div className="mt-12 bg-[#111] border border-gray-800 rounded-3xl p-10">

        <input
          type="text"
          placeholder="Enter a task..."
          className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
        />

        <button className="mt-6 bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold">
          Add Task
        </button>

      </div>

      <div className="mt-12 space-y-6">

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 flex justify-between items-center">
          <p>Complete React Router practice</p>

          <span className="text-cyan-400">
            Pending
          </span>
        </div>

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 flex justify-between items-center">
          <p>Prepare Java interview questions</p>

          <span className="text-green-400">
            Completed
          </span>
        </div>

      </div>

    </div>
  );
}

export default TaskManager;