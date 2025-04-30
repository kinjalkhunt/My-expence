import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userLogin } from "@/services/AuthService";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6"
import loginbgimage from "../assets/loginbgimage.jpg";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await userLogin({ body: { email, password } });
            console.log("Login Successfully", response);
            setMessage(response.message);
            navigate("/home");
        } catch (error) {
            setMessage(error.message || "Login Failed");
            console.error("Login failed", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen"
            style={{
                backgroundImage: `url(${loginbgimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <div className="p-8 rounded-xl shadow-lg w-96 bg-blue-950">
                <h2 className="text-3xl font-bold text-center text-gray-400">Welcome Back</h2>
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-400">
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
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"

                            />
                            <span
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="!absolute top-1/2 right-2 -translate-y-1/2 text-gray-500"
                                size="small">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                    </div>
                    {message && (
                        <p className="text-sm text-center text-red-500">{message}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>

                <div className="text-sm text-center p-1 text-gray-200">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register
                    </Link>
                </div>
                <div className="text-sm text-center text-gray-200">
                    Forgot your password?{" "}
                    <Link to="/forgot-password" className="text-blue-500 hover:underline">
                        Reset here
                    </Link>
                </div>

                <div className="flex items-center justify-center mt-4">
                    <button className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-semibold text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100">
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
    );
};


export default Login