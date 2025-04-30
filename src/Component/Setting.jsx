import React, { useState } from 'react';
import { IoBookSharp } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { MdBackup } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Setting() {
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);
    const navigate = useNavigate()
    
    const handleLogoutClick = () => {
        setIsLogoutOpen(true);
        navigate("/")
    };

    const handleCloseLogout = () => {
        setIsLogoutOpen(false);
    };
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold mb-6">Settings</h1>

            {/* Home Expence Section */}
            <div className="text-sm text-gray-500 mb-4">home expence</div>

            {/* Book Settings */}
            <div className="bg-white rounded-lg shadow-sm mb-4">
                <div className="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                            <IoBookSharp className="text-blue-600 text-xl" />
                        </div>
                        <div>
                            <div className="font-medium text-gray-900">Book Settings</div>
                            <div className="text-sm text-gray-500">Delete your khata</div>
                        </div>
                    </div>
                    <div className="text-gray-400">›</div>
                </div>
            </div>

            {/* Account Settings Section */}
            <div className="text-sm text-gray-500 mt-6 mb-4">Account Settings</div>

            {/* Plans and Billing */}
            <div className="space-y-2">
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <MdPayments className="text-purple-600 text-xl" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-900">Plans and Billing</div>
                                <div className="text-sm text-gray-500">Manage your plans and download invoices</div>
                            </div>
                        </div>
                        <div className="text-gray-400">›</div>
                    </div>
                </div>

                {/* Backup Information */}
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <MdBackup className="text-green-600 text-xl" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-900">Backup Information</div>
                                <div className="text-sm text-gray-500">Check your data sync status</div>
                            </div>
                        </div>
                        <div className="text-gray-400">›</div>
                    </div>
                </div>

                {/* Recycle Bin */}
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-100 rounded-lg">
                                <FaTrashAlt className="text-red-600 text-xl" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-900">Recycle Bin</div>
                                <div className="text-sm text-gray-500">Access deleted data</div>
                            </div>
                        </div>
                        <div className="text-gray-400">›</div>
                    </div>
                </div>

                {/* Help & Support */}
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                                <IoIosHelpCircle className="text-yellow-600 text-xl" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-900">Help & Support</div>
                                <div className="text-sm text-gray-500">Understand how it works</div>
                            </div>
                        </div>
                        <div className="text-gray-400">›</div>
                    </div>
                </div>

                {/* Logout */}
                <div className="bg-white rounded-lg shadow-sm">
                    <div
                        className="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between"
                        onClick={handleLogoutClick}
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-100 rounded-lg">
                                <IoLogOutOutline className="text-gray-600 text-xl" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-900">Logout</div>
                                <div className="text-sm text-gray-500">You will be logged out after data backup is complete</div>
                            </div>
                        </div>
                        <div className="text-gray-400">›</div>
                    </div>
                </div>
            </div>
            {isLogoutOpen && <Logout handleCloses={handleCloseLogout} />}


        </div>
    );
}

export default Setting;