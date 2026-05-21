import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          password,
        }
      );

      alert(response.data);

      if (response.data === "Login successful") {
        navigate("/dashboard");
      }

    } catch (error) {

      alert("Login failed");

    }

  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="bg-[#111] p-10 rounded-3xl w-[400px] border border-gray-800">

        <h1 className="text-4xl font-bold text-cyan-400 text-center">
          Login
        </h1>

        <div className="mt-8">

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400 mt-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-cyan-400 text-black py-4 rounded-xl font-semibold mt-8"
          >
            Login
          </button>

          <p className="text-gray-400 text-center mt-6">
            Don’t have an account?{" "}
            <Link to="/register" className="text-cyan-400">
              Register
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;