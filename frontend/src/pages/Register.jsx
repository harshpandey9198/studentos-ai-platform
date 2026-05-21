import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-3xl p-8">

        <h1 className="text-3xl font-bold text-center text-cyan-400">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Join StudentOS AI today
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400"
          />

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
            Register
          </Link>

        </form>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}

          <Link to="/" className="text-cyan-400">
            Login
          </Link>

        </p>

      </div>
    </div>
  );
}

export default Register;