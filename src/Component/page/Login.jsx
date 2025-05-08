import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userLogin } from "@/services/AuthService";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import moneyround from "../assets/moneyround.mp4";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/FireBaseConfig";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await userLogin({ body: { email, password } });
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("email", email);
            console.log("Login Successfully", response);
            setMessage(response.message);
            navigate("/home");
        } catch (error) {
            setMessage(error.message || "Login Failed");
            console.error("Login failed", error);
        }
    };

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Google login successful", result);
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("email", result.user.email);
            localStorage.setItem("displayName", result.user.displayName || "User");

            navigate("/home");

        } catch (error) {
            setMessage(error.message || "Google login failed");
            console.error("Google login failed", error);
        }
    };


    return (
        <div className="flex min-h-screen relative">
            {/* Video Background - Visible on all screens */}
            <div className="absolute inset-0">
                <video 
                    src={moneyround} 
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-screen object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="flex w-full min-h-screen relative z-10 items-center justify-center">
                {/* Login Form */}
                <div className="w-full max-w-md p-6 sm:p-8 border rounded-xl shadow-lg bg-[rgba(24,24,24,0.75)] backdrop-blur-sm mx-4">
                    <h2 className="text-3xl font-bold text-center text-white">Welcome Back</h2>
                    <form onSubmit={handleLogin} className="space-y-5 mt-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full px-4 py-2 mt-1 border rounded-md text-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full px-4 py-2 mt-1 border rounded-md text-gray-300 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <span
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        {message && <p className="text-sm text-center text-red-500">{message}</p>}

                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-semibold text-white bg-red-400 rounded-md hover:bg-blue-500"
                        >
                            SignIn
                        </button>
                    </form>

                    <div className="text-sm text-center mt-3 text-gray-200">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-blue-400 hover:underline">
                            Register
                        </Link>
                    </div>
                    <div className="text-sm text-center text-gray-200">
                        Forgot your password?{" "}
                        <Link to="/forgot-password" className="text-blue-400 hover:underline">
                            Reset here
                        </Link>
                    </div>

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
                </div>
            </div>
        </div>
    );
};

export default Login;
