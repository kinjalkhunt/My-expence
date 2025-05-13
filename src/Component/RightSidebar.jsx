import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { outPayment, paymentIn } from '@/services/PaymentService';

function RightSidebar({ isOpen, onClose, type }) {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [paymentMode, setPaymentMode] = useState('cash');
    const [paymentDate, setPaymentDate] = useState('');
    const [bill, setBill] = useState(null);

    if (!isOpen) return null;

    const handleFileChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            const fileType = selectedFile.type.split('/')[1];
            if (fileType !== 'png' && fileType !== 'jpeg' && fileType !== 'jpg') {
                alert("Only PNG or JPG file format supported");
                return;
            }
            if (selectedFile.size > 2 * 1024 * 1024) {
                alert("File size exceeds 2MB limit.");
                return;
            }

            setBill(selectedFile);
        } else {
            alert("Please select a file");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all required fields
        if (!amount || !description || !paymentMode || !paymentDate) {
            alert("Please fill in all required fields.");
            return;
        }

        const formData = new FormData();
        // Make sure field names match exactly what backend expects
        formData.append("amount", amount);
        formData.append("description", description);
        formData.append("paymentMode", paymentMode); 
        formData.append("paymentDate", paymentDate);

        if (bill) {
            formData.append("receiptUrl", bill);
        }

        try {
            console.log("Submitting payment type:", type);
            let result;
            if (type === "in") {
                result = await paymentIn({ body: formData });
                console.log("In Payment added successfully:", result);
                alert("In Payment added successfully!");
            } else if (type === "out") {
                result = await outPayment({ body: formData });
                console.log("Out Payment added successfully:", result);
                alert("Out Payment added successfully!");
            }

            // Reset form
            setAmount('');
            setDescription('');
            setPaymentMode('cash');
            setPaymentDate('');
            setBill(null);
            
            onClose(); 
        } catch (error) {
            console.error("Payment error:", error);
            if (error.message === "All required fields must be filled.") {
                alert("Please fill in all required fields correctly.");
            } else {
                alert(error.message || "Something went wrong. Please try again.");
            }
        }
    };

    return (
        <div
        className={`fixed right-0 top-0 h-full md:w-[350px] w-[250px] bg-white shadow-xl overflow-y-auto max-h-screen p-6 z-50
            ${isOpen ? "translate-y-0 md:translate-x-0" : "translate-y-full md:translate-x-full"}
            transition-transform duration-300 ease-in-out top-0 md:top-0 md:right-0 left-0 md:left-auto h-full w-full md:w-[350px] bg-white shadow-xl overflow-y-auto max-h-screen p-6 z-50 max-sm:h-96
            `}

        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-green-600">{type === 'in' ? 'In Entry' : 'Out Entry'}</h2>
                <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                    <IoMdClose size={24} />
                </button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
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
                            required
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
                        required
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
                            value={paymentDate}
                            onChange={(e) => setPaymentDate(e.target.value)}
                            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                            required
                        />
                        <FaCalendarAlt className="absolute right-3 top-3 text-gray-400" />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Attach Bill (Optional)</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer relative">
                        <span className="text-gray-500">Click to upload</span>
                        <span className="block text-sm text-gray-400">Only PNG or JPG file format supported</span>
                        <input
                            type="file"
                            accept=".png,.jpg,.jpeg"
                            onChange={handleFileChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                    Save
                </button>
            </form>
        </div>
    );
}

export default RightSidebar;