import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AuthLayout from "../layouts/AuthLayout";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/");
    }
  }, []);

  const register = async () => {
    try {
      if (!name || !email || !password) {
        setError("Please fill all fields");
        return;
      }

      setError("");
      setLoading(true);

      await axios.post(`${API_URL}/users/register`, {
        name,
        email,
        password,
      });

      alert("Account Created Successfully");

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthLayout>
      <div className="flex justify-center items-center min-h-screen w-full px-4">
        <div className="bg-white border shadow-xl p-6 md:p-8 rounded-xl text-slate-700 w-full max-w-md">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Zyvora</h1>
            <p className="text-gray-500 mt-2">Create your account</p>
          </div>

          <div className="mt-8">
            {/* Name */}
            <label className="font-semibold">Full Name</label>

            <div className="relative mt-2">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-md p-3 pl-10 outline-none"
              />
            </div>

            {/* Email */}
            <label className="font-semibold block mt-4">Email</label>

            <div className="relative mt-2">
              <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md p-3 pl-10 outline-none"
              />
            </div>

            {/* Password */}
            <label className="font-semibold block mt-4">Password</label>

            <div className="relative mt-2">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-md p-3 pl-10 outline-none"
              />
            </div>

            <div className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                id="showPassword"
              />

              <label htmlFor="showPassword" className="cursor-pointer">
                Show Password
              </label>
            </div>

            {/* Register Button */}
            <button
              onClick={register}
              disabled={loading}
              className="w-full bg-slate-900 text-white p-3 rounded-md mt-6 font-semibold hover:bg-slate-800"
            >
              {loading ? "Creating Account..." : "Register"}
            </button>

            {error && (
              <p className="text-red-500 text-center mt-4">
                Please fill all fields
              </p>
            )}

            <p className="text-center mt-6 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Register;
