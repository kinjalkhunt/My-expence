import { useParams } from "react-router-dom";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import RightSidebar from "./RightSidebar";

const Expence = () => {
    const [selectedDate, setSelectedDate] = useState("2025-05-01");
    const footerRef = useRef(null);
    const listContainerRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sidebarType, setSidebarType] = useState('in'); // 'in' or 'out'

    
    const handleSidebarOpen = (type) => {
        setSidebarType(type);
        setIsSidebarOpen(true);
    };

    const handleSidebarClose = () => {
        setIsSidebarOpen(false);
    };

    // Dummy data for demonstration (replace with actual data source)
    // const allEntries = [
    //     {
    //         name: "Milk",
    //         date: "2025-05-01",
    //         out: 40,
    //         in: 0,
    //     },
    //     {
    //         name: "Refund",
    //         date: "2025-05-01",
    //         out: 0,
    //         in: 100,
    //     },
    //     {
    //         name: "Milk",
    //         date: "2025-05-01",
    //         out: 40,
    //         in: 0,
    //     },
    //     {
    //         name: "Refund",
    //         date: "2025-05-01",
    //         out: 0,
    //         in: 100,
    //     },

    //     {
    //         name: "Milk",
    //         date: "2025-05-01",
    //         out: 40,
    //         in: 0,
    //     },
    //     {
    //         name: "Refund",
    //         date: "2025-05-01",
    //         out: 0,
    //         in: 100,
    //     },

    //     {
    //         name: "Milk",
    //         date: "2025-05-01",
    //         out: 40,
    //         in: 0,
    //     },
    //     {
    //         name: "Refund",
    //         date: "2025-05-01",
    //         out: 0,
    //         in: 100,
    //     },

    //     {
    //         name: "Milk",
    //         date: "2025-05-01",
    //         out: 40,
    //         in: 0,
    //     },
    //     {
    //         name: "Refund",
    //         date: "2025-05-01",
    //         out: 0,
    //         in: 100,
    //     },


    // ];
    // const filteredEntries = allEntries.filter((entry) => entry.date === selectedDate);
    // useEffect(() => {
    //     if (filteredEntries.length > 0 && footerRef.current) {
    //         footerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    //     }
    // }, [filteredEntries]);



    return (
        <div className={`flex flex-row w-full min-h-screen ${isSidebarOpen ? "opacity-100" : ""}`}>
            <div className="relative w-full mb-6 flex-grow">
                <h1 className="bg-white p-4 relative z-10 inline-block text-2xl  font-semibold mb-6">
                    My Daily Expence Book
                </h1>
                <div className="absolute left-0 md:top-24 lg:top-16 w-full border-t border-gray-300 z-0"></div>
                <div className="flex justify-around mt-4">
                    <p className="text-gray-500 text-xl inline-flex">Total Balance : <span className="p-2 "><FaIndianRupeeSign className="w-2.5 text-blue-500" /></span>  </p>
                    <p className="text-gray-500 text-xl inline-flex">ToDays Balance : <span className="p-2 "><FaIndianRupeeSign className="w-2.5 text-blue-500" /></span></p>
                    <button className="border border-blue-400 rounded-xl px-4 py-2">View Report</button>
                </div>
                <div className="border mt-8 border-gray-300"></div>
                <div className="flex justify-between items-center p-4 rounded-md">
                    <div>
                        <label className="text-xl text-gray-500 block mb-1">Date</label>
                        <input
                            type="date"
                            className="border border-gray-300 px-3 py-2 w-96 rounded-md text-sm"
                            defaultValue="2025-05-01"
                        />
                    </div>
                    <div className="border-1 h-20 border-gray-400"></div>
                    <div>
                        <label className="text-xl text-gray-500 block mb-1 ">Payment Mode</label>
                        <select className="border border-gray-300 px-3 py-2 w-96 rounded-md text-sm">
                            <option>ALL</option>
                            <option>CASH</option>
                            <option>UPI</option>
                        </select>
                    </div>
                </div>
                <div className="border mt-2 border-gray-300"></div>
                <div className="flex justify-between mt-4 items-center">
                    <div className="text-left pl-10">
                        <p className="text-gray-600 text-xl font-bold">Name</p>
                    </div>

                    <div className="flex gap-24 pr-20">
                        <p className="text-gray-600 text-xl font-bold">Out</p>
                        <p className="text-gray-600 text-xl font-bold">In</p>
                    </div>
                </div>
                <div
                    ref={listContainerRef}
                    className="mt-4 px-10 max-h-[400px] overflow-y-auto"
                >
                    {/* {filteredEntries.length === 0 ? (
                        <p className="text-center text-gray-500 text-lg">0 Entry</p>
                    ) : (
                        filteredEntries.map((entry, index) => (
                            <div key={index} className="flex justify-between items-center py-2 border-b">
                                <p className="text-gray-700 text-lg">{entry.name}</p>
                                <div className="flex gap-24">
                                    <p className="flex items-center text-red-500 text-lg">
                                        {entry.out > 0 && <FaIndianRupeeSign className="mr-1" />} {entry.out > 0 ? entry.out : "--"}
                                    </p>
                                    <p className="flex items-center text-green-500 text-lg">
                                        {entry.in > 0 && <FaIndianRupeeSign className="mr-1" />} {entry.in > 0 ? entry.in : "--"}
                                    </p>
                                </div>
                            </div>
                        ))
                    )} */}

                    {/* footer inside scrollable box */}
                    <div className="border border-gray-300"></div>

                    <div
                        ref={footerRef}
                        className="sticky  bottom-0 bg-white border-t border-gray-300 flex justify-center gap-6 p-4"
                    >
                        <button 
                            onClick={() => handleSidebarOpen('out')} 
                            className="bg-red-100 text-red-600 px-10 py-2 rounded-md font-medium"
                        >
                            OUT
                        </button>
                        <button 
                            onClick={() => handleSidebarOpen('in')}
                            className="bg-green-100 text-green-600 px-10 py-2 rounded-md font-medium"
                        >
                            IN
                        </button>
                    </div>
                    <div className="border border-gray-300"></div>

                </div>


            </div>


            {/* right side part */}
            <div className="border-1 border-gray-400"></div>
            <div className="p-6 min-h-screen w-full grid grid-rows-1 divide-x-2">
                <div className="flex flex-col justify-center items-center h-full space-y-4">
                    <BsFillFileEarmarkPersonFill className="w-24 h-24 text-indigo-300" />
                    <div className="text-lg font-medium text-gray-600">No Transaction Selected</div>
                </div>
            </div>

            <RightSidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} type={sidebarType} />

        </div>
    );
};

export default Expence;
