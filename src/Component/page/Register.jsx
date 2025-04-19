import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import loginbgimage from "../assets/loginbgimage.jpg";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (email && password && confirmPassword) {
            if (password === confirmPassword) {
                localStorage.setItem('userEmail', email);
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/home');
            } else {
                alert('Passwords do not match!');
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
                <h2 className="text-2xl font-bold text-center text-white">Register</h2>
                <form className='mt-4' onSubmit={handleOnSubmit}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
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
                        <label className="block text-white text-sm font-bold mb-2">
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
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Register
                    </button>
                </form>
                <div className="mt-4 text-center text-white">
                    Already have an account?{" "}
                    <Link to="/" className="text-blue-400 hover:text-blue-300 underline">
                        Login Here
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Register;
