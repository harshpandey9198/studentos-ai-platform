function AIChat() {
  return (
    <div className="min-h-screen bg-black text-white flex">

      {/* Sidebar */}

      <div className="w-80 bg-[#0f0f0f] border-r border-gray-800 p-6">

        <h1 className="text-3xl font-bold text-cyan-400">
          AI Assistant
        </h1>

        <button className="w-full mt-8 bg-cyan-400 text-black py-3 rounded-xl font-semibold">
          + New Chat
        </button>

        <div className="mt-10 space-y-4">

          <div className="bg-[#111] border border-gray-800 p-4 rounded-xl">
            React Interview Prep
          </div>

          <div className="bg-[#111] border border-gray-800 p-4 rounded-xl">
            Java DSA Questions
          </div>

          <div className="bg-[#111] border border-gray-800 p-4 rounded-xl">
            Resume Improvements
          </div>

        </div>

      </div>

      {/* Chat Area */}

      <div className="flex-1 flex flex-col">

        <div className="flex-1 p-10 overflow-y-auto">

          <div className="max-w-4xl mx-auto">

            <div className="bg-[#111] border border-gray-800 p-6 rounded-3xl">
              <p className="text-gray-300">
                How can I improve my Spring Boot skills for placements?
              </p>
            </div>

            <div className="bg-cyan-400 text-black p-6 rounded-3xl mt-6 ml-20">
              <p>
                You should focus on REST APIs, JWT authentication,
                MySQL integration, and deploy full stack projects.
              </p>
            </div>

          </div>

        </div>

        {/* Input */}

        <div className="p-6 border-t border-gray-800">

          <div className="max-w-4xl mx-auto flex gap-4">

            <input
              type="text"
              placeholder="Ask anything..."
              className="flex-1 bg-[#111] border border-gray-800 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
            />

            <button className="bg-cyan-400 text-black px-8 rounded-2xl font-semibold">
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AIChat;