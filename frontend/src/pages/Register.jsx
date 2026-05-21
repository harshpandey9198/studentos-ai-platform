import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          fullName,
          email,
          password,
        }
      );

      alert("Registration Successful");

      navigate("/");

    } catch (error) {

      alert("Registration Failed");

    }

  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="bg-[#111] p-10 rounded-3xl w-[400px] border border-gray-800">

        <h1 className="text-4xl font-bold text-cyan-400 text-center">
          Register
        </h1>

        <div className="mt-8">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400 mt-6"
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
            onClick={handleRegister}
            className="w-full bg-cyan-400 text-black py-4 rounded-xl font-semibold mt-8"
          >
            Register
          </button>

          <p className="text-gray-400 text-center mt-6">
            Already have an account?{" "}
            <Link to="/" className="text-cyan-400">
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;