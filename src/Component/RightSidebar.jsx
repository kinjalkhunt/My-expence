import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { paymentIn } from '@/services/PaymentService';

function RightSidebar({ isOpen, onClose, type }) {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [paymentMode, setPaymentMode] = useState('cash');
    const [date, setDate] = useState('');
    const [bill, setBill] = useState(null);

    if (!isOpen) return null;

    const handleFileChange = (e) => {
        setBill(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!amount || !description || !paymentMode || !date) {
            alert("Please fill in all required fields.");
            return;
        }
    
        const formData = new FormData();
        formData.append('amount', amount);
        formData.append('description', description);
        formData.append('paymentMode', paymentMode);
        formData.append('paymentDate', date);
        if (bill) {
            formData.append('receiptFile', bill); // Must match the field expected by backend
        }
    
        try {
            const result = await paymentIn({ body: formData });
            alert("Payment added successfully!");
            onClose(); // Close sidebar
        } catch (error) {
            alert(error.message || "Something went wrong.");
        }
    };
    
    
    return (
        <>
            {/* <div
                className="fixed inset-0 bg-opacity-50 z-10"
            /> */}
            {/* Sidebar */}
            <div className="fixed right-0 top-0 h-full w-[400px] bg-white shadow-xl/150 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-green-600">{type === 'in' ? 'In Entry' : 'Out Entry'}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <IoMdClose size={24} />
                    </button>
                </div>

                <div className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 mb-2">Amount</label>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5">₹</span>
                            <input
                                type="number"
                                placeholder="Enter Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Description</label>
                        <textarea
                            placeholder="Enter Details (Item Name, Bill No, Quantity, etc)"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded h-24 focus:outline-none focus:border-green-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Payment Mode</label>
                        <div className="flex gap-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="paymentMode"
                                    value="cash"
                                    checked={paymentMode === 'cash'}
                                    onChange={() => setPaymentMode('cash')}
                                    className="mr-2"
                                />
                                Cash
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="paymentMode"
                                    value="online"
                                    checked={paymentMode === 'online'}
                                    onChange={() => setPaymentMode('online')}
                                    className="mr-2"
                                />
                                Online
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Date</label>
                        <div className="relative">
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                            />
                            <FaCalendarAlt className="absolute right-3 top-3 text-gray-400" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Attach Bill</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <div className="flex flex-col items-center">
                                <span className="text-gray-500 mb-2">Click to upload</span>
                                <span className="text-sm text-gray-400">Only PNG or JPG file format supported</span>
                            </div>
                            <input
                                type="file"
                                className="hidden"
                                accept=".png,.jpg,.jpeg"
                                onChange={handleFileChange}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Save
                    </button>
                </div>
            </div>
        </>
    );
}

export default RightSidebar;
