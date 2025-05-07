import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "@/services/AuthService";
import loginbgimage from "../assets/loginbgimage.jpg"; // Optional background
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/FireBaseConfig";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await registerUser(formData);
      console.log("Backend response received:", result);
      localStorage.setItem("rname", formData.name);
      localStorage.setItem("remail", formData.email);


      navigate("/home");
    } catch (error) {
      console.error("Error from API:", error);
      setMessage(error.message || "Registration failed");
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google login successful", result);
      navigate("/home");
    } catch (error) {
      setMessage(error.message || "Google login failed");
      console.error("Google login failed", error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${loginbgimage})` }}
    >
      <div className="bg-blue-950 bg-opacity-90 backdrop-blur-sm shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-300">
          Create Account
        </h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label
              className="block text-gray-300 font-medium mb-1"
              htmlFor="name"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-300 font-medium mb-1"
              htmlFor="email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-300"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-300 font-medium mb-1"
              htmlFor="password"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-300"
                placeholder="Enter your password"
                required
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-300"
          >
            Register
          </button>
          {message && (
            <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
          )}
          <div className="flex items-center justify-center mt-5">
            <button
              onClick={signInWithGoogle}
              className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Login with Google
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default RegisterPage;