import { useParams } from "react-router-dom";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import RightSidebar from "./RightSidebar";
import { getOutPayment, getPayIn } from "@/services/PaymentService";

const Expence = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const footerRef = useRef(null);
    const listContainerRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sidebarType, setSidebarType] = useState('in'); // 'in' or 'out'
    const [inEntries, setInEntries] = useState([]);
    const [paymentMode, setPaymentMode] = useState('ALL');
    const [outEntries, setOutEntries] = useState([]);
    const handleSidebarOpen = (type) => {
        setSidebarType(type);
        setIsSidebarOpen(true);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const fetchOutEntries = async () => {
        try {
            console.log("Fetching Out entries for date:", selectedDate);
            const response = await getOutPayment({ body: { paymentDate: selectedDate } });
            console.log("Raw API Response (Out):", response);
            setOutEntries(response.data);
        } catch (err) {
            console.error("Error fetching Out entries:", err);
            setOutEntries([]);
        }
    };

    const fetchInEntries = async () => {
        try {
            console.log('Fetching entries for date:', selectedDate);
            const response = await getPayIn({ body: { paymentDate: selectedDate } });
            console.log('Raw API Response:', response);
            setInEntries(response.data);

        } catch (err) {
            console.error('Error fetching entries:', err);
            setInEntries([]);
        }
    };
    // const handleSetPaymentMode = (mode) => {
    //     setPaymentMode(mode);
    // }
    // Add a useEffect to log when inEntries changes
    useEffect(() => {
        console.log('Current inEntries:', inEntries);
    }, [inEntries]);

    useEffect(() => {
        fetchInEntries();
    }, [selectedDate]);

    return (
        <div className={`flex flex-col xl:flex-row w-full min-h-screen ${isSidebarOpen ? "opacity-100" : ""}`}>
            {/* Main Content */}
            <div className="relative w-full mb-6 flex-grow px-2 sm:px-4 md:px-8">
                <h1 className="bg-white p-4 relative z-10 inline-block text-xl md:text-2xl font-semibold mb-6">
                    My Daily Expence Book
                </h1>
                <div className="absolute left-0 md:top-24 lg:top-16 w-full border-t border-gray-300 z-0"></div>
                <div className="flex flex-col md:flex-col lg:flex-row justify-around mt-4 gap-2 md:gap-0">
                    <p className="text-gray-500 text-xl inline-flex">Total Balance : <span className="p-2 "><FaIndianRupeeSign className="w-2.5 text-blue-500" /></span>  </p>
                    <p className="text-gray-500 text-xl inline-flex">ToDays Balance : <span className="p-2 "><FaIndianRupeeSign className="w-2.5 text-blue-500" /></span></p>
                    <button className="border border-blue-400 rounded-xl text-xl px-4 py-2 w-36 mt-2 sm:mt-0">View Report</button>
                </div>
                <div className="border mt-8 border-gray-300"></div>
                <div className="flex justify-between items-center p-4 rounded-md gap-4">
                    <div className="flex md:flex-col xl:flex-row gap-4">
                        <div className="w-full md:w-auto">
                            <label className="md:text-xl text-gray-500 block mb-1">Date</label>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                className="border border-gray-300 px-3 py-2 w-full md:w-96 rounded-md text-sm"
                            />
                        </div>
                        <div className="border-1 h-20 border-gray-400 hidden xl:block"></div>
                        <div className="w-full md:w-auto">
                            <label className="md:text-xl text-gray-500 block mb-1 ">Payment Mode</label>
                            <select
                                className="border border-gray-300 px-3 py-2 w-full md:w-96 rounded-md text-sm"
                                value={paymentMode}
                                onChange={(e) => setPaymentMode(e.target.value)}
                            >
                                <option>ALL</option>
                                <option>CASH</option>
                                <option>ONLINE</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div className="border mt-2 border-gray-300"></div>
                <div className="flex justify-between mt-4 items-center flex-wrap gap-2">
                    <div className="text-left pl-2 md:pl-10">
                        <p className="text-gray-600 text-base md:text-xl font-bold">Name</p>
                    </div>
                    <div className="flex gap-8 md:gap-24 pr-2 md:pr-20">
                        <p className="text-gray-600 text-base md:text-xl font-bold">Out</p>
                        <p className="text-gray-600 text-base md:text-xl font-bold">In</p>
                    </div>
                </div>
                <div
                    ref={listContainerRef}
                    className="mt-4 px-2 md:px-10 max-h-[510px] overflow-y-auto"
                >
                    {/* Entries go here */}
                    <div className="mt-4 px-2 md:px-10">
                        <div className="flex justify-between mt-4 items-center flex-wrap gap-2">
                            {/* Display Current Date */}
                            <div>
                                <p className="text-lg font-semibold mb-2 text-green-700">
                                    {new Date(selectedDate).toLocaleDateString("en-US", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                    })}{" "}
                                    (TODAY)
                                </p>
                            </div>

                            {/* Calculate and Display OUT Sum */}
                            <div>
                                <p className="text-lg font-semibold mb-2 text-red-700">
                                    ₹
                                    {outEntries.reduce((sum, entry) => sum + (entry.amount || 0), 0)}
                                </p>
                            </div>

                            {/* Calculate and Display IN Sum */}
                            <div>
                                <p className="text-lg font-semibold mb-2 text-green-700">
                                    ₹
                                    {inEntries.reduce((sum, entry) => sum + Number(entry.amount || 0), 0)}
                                </p>
                            </div>
                        </div>
                        {inEntries && inEntries.length > 0 ? (
                            inEntries
                                .filter(entry => {
                                    // Filter based on payment mode
                                    if (paymentMode === 'ALL') return true; // Show all entries
                                    return entry.paymentMode.toLowerCase() === paymentMode.toLowerCase(); // Match payment mode
                                })
                                .map((entry, idx) => (
                                    <div key={idx} className="flex justify-between items-center border-b py-2">
                                        <div className="flex-1">
                                            <div className="font-medium">{entry.description}</div>
                                            <div className="text-sm text-[#175cd3] bg-[#d1e9ff] w-12 py-0.5 text-center font-semibold">
                                                {entry.paymentMode}
                                            </div>
                                            <div className="text-xs text-gray-500">{entry.paymentDate}</div>
                                            {entry.receiptUrl && (
                                                <img
                                                    src={`${import.meta.env.VITE_LOCAL_URL}${entry.receiptUrl}`}
                                                    alt="Receipt"
                                                    className="mt-2 max-h-9 rounded"
                                                />
                                            )}
                                        </div>
                                        <div className="text-green-600 font-bold flex items-center gap-1 ml-4">
                                            <FaIndianRupeeSign className="inline-block" />
                                            {entry.amount}
                                        </div>
                                    </div>
                                ))
                        ) : (
                            <div className="text-gray-400">No IN entries for selected date.</div>
                        )}

                    </div>
                    <div className="border border-gray-300"></div>
                    <div
                        // ref={footerRef}
                        className="sticky bottom-0 bg-white border-t border-gray-300 flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 p-2"
                    >
                        <button
                            onClick={() => handleSidebarOpen('out')}
                            className="bg-red-100 text-red-600 px-6 sm:px-10 py-2 rounded-md font-medium w-full sm:w-auto"
                        >
                            OUT
                        </button>
                        <button
                            onClick={() => handleSidebarOpen('in')}
                            className="bg-green-100 text-green-600 px-6 sm:px-10 py-2 rounded-md font-medium w-full sm:w-auto"
                        >
                            IN
                        </button>
                    </div>
                    <div className="border border-gray-300"></div>
                </div>
            </div >
            {/* Right Sidebar */}
            < div className="p-2 md:p-6 min-h-[200px] md:min-h-screen w-full grid grid-rows-1 divide-x-2" >
                <div className="flex flex-col justify-center items-center h-full space-y-4">
                    <BsFillFileEarmarkPersonFill className="w-24 h-24 text-indigo-300" />
                    <div className="text-lg font-medium text-gray-600">No Transaction Selected</div>
                </div>
            </div >
            <RightSidebar
                isOpen={isSidebarOpen}
                onClose={() => {
                    setIsSidebarOpen(false);
                    fetchInEntries();
                    fetchOutEntries();
                }}
                type={sidebarType}
            />
        </div >
    );
};

export default Expence;
