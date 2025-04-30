// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';


// function Register() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const navigate = useNavigate();

//     const handleOnSubmit = (e) => {
//         e.preventDefault();
//         if (email && password && confirmPassword) {
//             if (password === confirmPassword) {
//                 localStorage.setItem('userEmail', email);
//                 localStorage.setItem('isLoggedIn', 'true');
//                 navigate('/home');
//             } else {
//                 alert('Passwords do not match!');
//             }
//         }
//     }

//     return (
//         <div className="flex items-center justify-center min-h-screen"
//             style={{
//                 backgroundImage: `url(${loginbgimage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//             }}>
//             <div className="p-8 rounded-xl shadow-lg w-96 bg-blue-950">
//                 <h2 className="text-2xl font-bold text-center text-white">Register</h2>
//                 <form className='mt-4' onSubmit={handleOnSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-white text-sm font-bold mb-2">
//                             Email
//                         </label>
//                         <input
//                             type='email'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your email"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-white text-sm font-bold mb-2">
//                             Password
//                         </label>
//                         <input
//                             type='password'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your password"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-white text-sm font-bold mb-2">
//                             Confirm Password
//                         </label>
//                         <input
//                             type='password'
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Confirm your password"
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
//                     >
//                         Register
//                     </button>
//                 </form>
//                 <div className="mt-4 text-center text-white">
//                     Already have an account?{" "}
//                     <Link to="/" className="text-blue-400 hover:text-blue-300 underline">
//                         Login Here
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Register;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import loginbgimage from "../assets/loginbgimage.jpg";
// import { userRegister } from '@/services/AuthService';

// function Register() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleOnSubmit = async (e) => {
//         e.preventDefault();
//         if (email && password) {
//             try {
//                 const body = { email, password };
//                 await userRegister({ body }); // <-- Call your API
//                 alert('Registration Successful!');
//                 navigate('/'); // Redirect to Login
//             } catch (error) {
//                 alert(error?.response?.data?.message || "Registration Failed!");
//             }
//         } else {
//             alert("Please fill all fields.");
//         }
//     }

//     return (
//         <div className="flex items-center justify-center min-h-screen"
//             style={{
//                 backgroundImage: `url(${loginbgimage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//             }}>
//             <div className="p-8 rounded-xl shadow-lg w-96 bg-blue-950">
//                 <h2 className="text-2xl font-bold text-center text-white">Register</h2>
//                 <form className='mt-4' onSubmit={handleOnSubmit}>
//                     <div className="mb-4">
//                         <label className="block text-white text-sm font-bold mb-2">Email</label>
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
//                         <label className="block text-white text-sm font-bold mb-2">Password</label>
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
//                         Register
//                     </button>
//                 </form>
//                 <div className="mt-4 text-center text-white">
//                     Already have an account?{" "}
//                     <Link to="/" className="text-blue-400 hover:text-blue-300 underline">
//                         Login Here
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Register;
// import { userRegister } from "../../services/AuthService";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { closeRegisterModel, openLoginModel } from "../slice/AuthSlice";
// // import { userRegister } from "../services/authService"; // Update path if needed
// // import { closeRegisterModel, openLoginModel } from "../store/authSlice"; // Update path if needed

// const Register = () => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await userRegister({ body: { name, email, password } });
//       setMessage(result.message);
//       dispatch(closeRegisterModel());
//       dispatch(openLoginModel());
//     } catch (error) {
//       setMessage(error.message || "Registration Failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-md w-96">
//         <h2 className="text-2xl mb-4 text-center font-bold">Register</h2>

//         <form onSubmit={handleRegister} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full p-2 border rounded"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-2 border rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-2 border rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             type="submit"
//             className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
//           >
//             Register
//           </button>
//         </form>

//         <p className="text-center mt-4">
//           Already have an account?{" "}
//           <button
//             className="text-green-500 hover:underline"
//             onClick={() => {
//               dispatch(closeRegisterModel());
//               dispatch(openLoginModel());
//             }}
//           >
//             Login
//           </button>
//         </p>

//         {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//       </div>
//     </div>
//   );
// };

// export default Register;
// src/pages/Register.jsx
// import { registerUser } from '@/services/AuthService';
// import React, { useState } from 'react';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await registerUser(formData);
//       console.log("??????", result);

//       setMessage(result.message);
//     } catch (error) {
//       setMessage(error.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen"
//       style={{
//         backgroundImage: `url(${loginbgimage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}>
//       <div className="p-8 rounded-xl shadow-lg w-96 bg-blue-950">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         {message && <p className="mb-4 text-center text-sm text-red-500">{message}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "@/services/AuthService";
import loginbgimage from "../assets/loginbgimage.jpg"; // Optional background

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      console.log("Response from registerUser:", response);
      localStorage.setItem("email", response?.user?.email);
      console.log("?????????",response?.user?.email);
      

      localStorage.setItem("token", response.token);
      setMessage(response.message);
      navigate("/home");
    } catch (error) {
      setMessage(error.message || "Registration failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginbgimage})` }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-sm shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-300"
          >
            Register
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-red-500 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
