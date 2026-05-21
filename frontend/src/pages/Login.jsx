import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-3xl p-8">

        <h1 className="text-3xl font-bold text-center text-cyan-400">
          Welcome Back
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Login to your StudentOS AI account
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
          />

          <Link
            to="/dashboard"
            className="block w-full bg-cyan-400 text-black py-3 rounded-xl font-semibold text-center"
          >
            Login
          </Link>

        </form>

        <p className="text-gray-400 text-center mt-6">
          Don't have an account?{" "}

          <Link to="/register" className="text-cyan-400">
            Register
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Login;