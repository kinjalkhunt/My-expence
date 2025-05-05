import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeCookie } from '../resource/utility';

const Logout = ({ handleCloses }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        localStorage.removeItem("displayName");



        removeCookie("token");
        navigate('/');
        window.location.reload();
    };

    const handleClose = () => {
        handleCloses();
    };
    //bg-[#42545f]
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50 px-4">
            <div className="bg-blue-950 rounded-2xl w-full max-w-3xl p-6 text-[#b1bad3] relative">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-base flex items-center font-semibold text-white">
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="#b1bad3"
                            viewBox="0 0 64 64"
                        >
                            <path d="M23.174 48.96h15.174v-6.506h8V56.96H23.174V64L0 56.96V7.04L23.174 0v7.04h23.174v14.506h-8V15.04H23.174v33.92Zm25.332-25.895L64 32l-15.494 8.934V36h-16.16v-8h16.16v-4.934Z" />
                        </svg>
                        Logout
                    </h1>
                    <button onClick={handleClose} className="text-[#b1bad3] text-xl font-bold hover:text-white">&times;</button>
                </div>

                <p className="mb-6 text-base">
                    Are you sure you want to end your session and log out?
                </p>

                <button
                    onClick={handleLogout}
                    className="w-full bg-[#E9113C] hover:bg-[#ba0e30] text-white font-semibold py-3 rounded"
                >
                    Log out
                </button>
            </div>
        </div>
    );
};

export default Logout;
