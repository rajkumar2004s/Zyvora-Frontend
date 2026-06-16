import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import AuthLayout from "../layouts/authLAyout";
import { TiStarHalfOutline } from "react-icons/ti";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/");
    }
  }, []);

  const login = async () => {
    try {
      if (!email || !password) {
        setError("Please fill all fields");
        return;
      }

      setError("");
      setLoading(true);

      const res = await axios.post("/users/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user.id);
      localStorage.setItem("userName", res.data.user.name);

      // Set default Authorization header for future requests
      axios.defaults.headers.common["Authorization"] =
        `Bearer ${res.data.token}`;

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || err.response?.data || "Login Failed",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="flex justify-center items-center min-h-screen  w-full">
        <div className="bg-white border shadow-xl p-8 rounded-xl w-full max-w-md">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#051647]">
              <TiStarHalfOutline />
              Zyvora
            </h1>
            <p className="text-gray-500 mt-2 font-medium">
              Login to your account
            </p>
          </div>

          <div className="mt-8">
            <label className="font-semibold">Email</label>

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

            <label className="font-semibold block mt-4">Password</label>

            <div className="relative mt-2">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && login()}
                className="w-full border rounded-md p-3 pl-10 outline-none"
              />
            </div>

            <div className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />

              <label htmlFor="showPassword" className="cursor-pointer">
                Show Password
              </label>
            </div>

            <button
              onClick={login}
              disabled={loading}
              className="w-full bg-slate-900 text-white p-3 rounded-md mt-6 font-semibold hover:bg-slate-800 disabled:opacity-50"
            >
              {loading ? "Logging In..." : "Login"}
            </button>

            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Login;
