import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import loginbgimage from "../assets/loginbgimage.jpg";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault(); 
        if (email && password) {
            // Here you would typically check if the account exists
            // For now, we'll just navigate to register if email doesn't exist
            const existingEmail = localStorage.getItem('userEmail');
            if (existingEmail === email) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userEmail', email);
                navigate('/home');
            } else {
                // If account doesn't exist, navigate to register
                navigate('/register');
            }
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen"
        style={{
            backgroundImage: `url(${loginbgimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
            <div className="p-8 rounded-xl shadow-lg w-96 bg-blue-950">
                <h2 className="text-2xl font-bold text-center text-white">Login</h2>
                <form className='mt-4' onSubmit={handleOnSubmit}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" >
                            Email
                        </label>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" >
                            Password
                        </label>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                       Login
                    </button>
                </form>
                <div className="mt-4 text-center text-white">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-400 hover:text-blue-300 underline">
                        Register Here
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login


// Login.js
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     // Check if user is already logged in
//     useEffect(() => {
//         const token = localStorage.getItem("token");
//         if (token) {
//             navigate("/"); // Redirect if already logged in
//         }
//     }, [navigate]);

    // Normal Login Handler
    // const handleOnSubmit = async (e) => {
    //     e.preventDefault();
    //     if (email && password) {
    //         try {
    //             const response = await fetch("http://localhost:8000/v1/auth/login", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({ email, password }),
    //             });

    //             const data = await response.json();

    //             if (response.ok) {
    //                 localStorage.setItem("token", data.token);
    //                 navigate("/");
    //             } else {
    //                 alert(data.message);
    //             }
    //         } catch (error) {
    //             console.error("Login Error:", error);
    //             alert("Something went wrong");
    //         }
    //     }
    // };
//     const handleOnSubmit = async (e) => {
//         e.preventDefault();

//         if (email && password) {
//             try {
//                 const response = await fetch("http://localhost:8000/v1/auth/login", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({ email, password }),
//                 });

//                 const data = await response.json();

//                 if (response.ok) {
//                     localStorage.setItem("token", data.token); // Store token
//                     navigate("/"); // Redirect to home
//                 } else {
//                     alert(data.message); // Show backend error message
//                 }
//             } catch (error) {
//                 console.error("Login Error:", error);
//                 alert("Something went wrong");
//             }
//         }
//     };

//     // Google Login Handler
//     const handleGoogleLogin = () => {
//         window.open("http://localhost:8000/v1/auth/google/", "_self");
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-8 rounded-xl shadow-lg w-96">
//                 <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
//                 <form className="mt-4" onSubmit={handleOnSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-gray-600 text-sm font-bold mb-2">Email</label>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your email"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-600 text-sm font-bold mb-2">Password</label>
//                         <input
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your password"
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
//                     >
//                         Login
//                     </button>
//                 </form>
//                 <div className="pt-4 text-center">
//                     <h1 className="text-sm text-gray-600">
//                         Not Registered?{" "}
//                         <span
//                             className="text-blue-500 underline cursor-pointer hover:text-blue-600"
//                             onClick={() => navigate("/register")}
//                         >
//                             Create An Account
//                         </span>
//                     </h1>
//                 </div>


//                 {/* Google Login Button */}
//                 <button
//                     onClick={handleGoogleLogin}
//                     className="w-full mt-4 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors"
//                 >
//                     Continue with Google
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Login;
