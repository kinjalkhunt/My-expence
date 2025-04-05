// import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

// function MonthSidebar() {
    // const { monthName } = useParams();
    // const navigate = useNavigate()

//     const months = [
        // { id: 1, name: 'January', days: 31 },
        // { id: 2, name: 'February', days: 28 },
        // { id: 3, name: 'March', days: 31 },
        // { id: 4, name: 'April', days: 30 },
        // { id: 5, name: 'May', days: 31 },
        // { id: 6, name: 'June', days: 30 },
        // { id: 7, name: 'July', days: 31 },
        // { id: 8, name: 'August', days: 31 },
        // { id: 9, name: 'September', days: 30 },
        // { id: 10, name: 'October', days: 31 },
        // { id: 11, name: 'November', days: 30 },
        // { id: 12, name: 'December', days: 31 }
//     ];
//     const handleMonthClick = (monthName) => {
//         navigate(`/month/${monthName.toLowerCase()}`)
//     }
//     return (
//         <div className='w-64 h-screen bg-gray-400 p-4'>
//             <h2 className="text-xl font-bold text-white mb-4">Months</h2>
//             <hr className='bg-gray-100' />
//             <ul className="space-y-2">
//                 {months.map((month) => (
//                     <li
//                         key={month.id}
//                         onClick={() => handleMonthClick(month.name)}
//                         className="text-gray-800 p-2 rounded hover:bg-gray-100 cursor-pointer"
//                     >
//                         <span className="text-xl font-semibold text-black">{month.name}</span>
//                         {/* <span className="ml-2 text-sm text-gray-600">({month.days} days)</span> */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default MonthSidebar
function MonthSidebar() {
    const { monthName } = useParams();
    const navigate = useNavigate();

    const email = localStorage.getItem('userEmail');
    const profileInitial = email ? email[0].toUpperCase() : '';

    const months = [
        {id: 1, name: "Home"},
        {id: 2, name: "Expense"},
        {id: 3,name: "Month"}
    ];

    const handleMonthClick = (monthName) => {
        navigate(`/month/${monthName.toLowerCase()}`);
    };

    return (
        <div className='w-64 h-screen bg-[#1B1B1B] p-4'>
            {/* 👇 Profile Letter */}
            <div className="w-full flex justify-start items-center mb-6">
                <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold">
                    {profileInitial}
                </div>
            </div>

            <ul className="space-y-2 mt-4">
                {months.map((month) => (
                    <li
                        key={month.id}
                        onClick={() => handleMonthClick(month.name)}
                        className="w-full text-white p-2 rounded hover:bg-white hover:text-black cursor-pointer">
                        <span className="text-xl px-3 font-semibold">{month.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default MonthSidebar;