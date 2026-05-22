import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://studentos-ai-platform-1.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      alert(data.message);

      if (data.message === "Login successful") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-pink-50 px-4">
      <div className="w-full max-w-md bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-pink-100">
        <div className="text-center">
          <div className="text-5xl mb-3">🎓</div>
          <h1 className="text-4xl font-extrabold">
            <span className="text-gray-900">Student</span>
            <span className="text-pink-500">OS</span>
          </h1>
          <p className="text-gray-500 mt-2">AI Student Platform</p>
        </div>

        <h2 className="text-2xl font-bold text-center mt-8 text-gray-900">
          Welcome Back! 👋
        </h2>

        <form onSubmit={handleLogin} className="mt-8">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border border-pink-200 rounded-2xl px-5 py-4 outline-none focus:border-pink-500 mb-4 text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border border-pink-200 rounded-2xl px-5 py-4 outline-none focus:border-pink-500 mb-4 text-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-gradient-to-r from-pink-500 to-pink-400 text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition">
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-pink-500 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;