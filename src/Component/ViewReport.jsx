import React from 'react'

function ViewReport() {
    const [period, setPeriod] = React.useState("quarter")
    const [sort, setSort] = React.useState("mostRecent")
    return (
        <div>
            <div className='flex flex-row justify-between items-center p-5'>
                {/* Left Side */}
                <p className='text-xl font-semibold text-gray-500'>View Report Page</p>

                {/* Right Side Buttons */}
                <div className='flex flex-row gap-4'>
                    <button className='border-2 border-gray-400 px-4 py-2'>Download Pdf</button>
                    <button className='border-2 border-gray-400 px-4 py-2'>Download Excel</button>
                </div>
            </div>

            <p className='border border-gray-300 w-full'></p>
            <div className='flex ml-10 flex-row gap-3 p-4 '>
                <div className='text-gray-500 flex flex-col gap-2'>
                    <label>Period</label>
                    <select
                        className='border border-gray-500 rounded-md w-44 h-10'
                        value={period}
                        onChange={e => setPeriod(e.target.value)}
                    >
                        <option value="year">This Year</option>
                        <option value="quarter">This Quarter</option>
                        <option value="month">This Month</option>
                        <option value="lastMonth">Last Month</option>
                        <option value="week">This Week</option>
                        <option value="yesterday">Yesterday</option>
                    </select>
                </div>
                <div className='text-gray-500 flex flex-col gap-2'>
                    <label>Start</label>
                    <input type="date" className='border border-gray-500 rounded-md w-44 h-10' />
                </div>
                <div className='text-gray-500 flex flex-col gap-2'>
                    <label>End</label>
                    <input type="date" className='border border-gray-500 rounded-md w-44 h-10' />
                </div>
                <div className='text-gray-500 flex flex-col gap-2'>
                    <label>Sort</label>
                    <select
                        className='border border-gray-500 rounded-md w-44 h-10'
                        value={sort}
                        onChange={e => setSort(e.target.value)}
                    >
                        <option value="mostRecent">Most Recently</option>
                        <option value="oldest">Oldest</option>
                        <option value="highest">Highest Amount</option>
                        <option value="lowest">Lowest Amount</option>
                    </select>
                </div>
            </div>
            <div className="flex gap-5 p-4 ml-10">
                {/* Total In */}
                <div className="bg-[#e6f4f2] p-4 rounded-md w-48 shadow-[0.75rem]">
                    <div className="text-xl font-semibold">₹2,633</div>
                    <div className="text-[#12b76a] font-normal text-sm">Total In</div>
                </div>

                {/* Total Out */}
                <div className="bg-[#fff4f3] p-4 rounded-md w-48 shadow-[0.75rem]">
                    <div className="text-xl font-semibold">₹1,919</div>
                    <div className="text-[#d92d20] text-sm">Total Out</div>
                </div>

                {/* Net Balance */}
                <div className="bg-[#e3edf9] p-4 rounded-md w-48 shadow-[0.75rem]">
                    <div className="text-xl font-semibold">₹714</div>
                    <div className="text-[#51515e] text-sm">Net Balance</div>
                </div>
            </div>
            <div className="p-4 ml-10">
                <table className="w-[55rem] table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-2">DATE</th>
                            <th className="p-2">TOTAL IN</th>
                            <th className="p-2">TOTAL OUT</th>
                            <th className="p-2">BALANCE</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-t">
                            <td className="p-2">20 May 2025</td>
                            <td className="p-2 text-green-600">₹911</td>
                            <td className="p-2 text-red-600">₹922</td>
                            <td className="p-2 text-green-600">₹-11</td>
                        </tr>
                        <tr className="bg-gray-50 border-t">
                            <td className="p-2">19 May 2025</td>
                            <td className="p-2 text-green-600">₹500</td>
                            <td className="p-2 text-red-600">₹222</td>
                            <td className="p-2 text-green-600">₹278</td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-2">09 May 2025</td>
                            <td className="p-2 text-green-600">₹122</td>
                            <td className="p-2 text-red-600">₹100</td>
                            <td className="p-2 text-green-600">₹22</td>
                        </tr>
                        <tr className="bg-gray-50 border-t">
                            <td className="p-2">08 May 2025</td>
                            <td className="p-2 text-green-600">₹100</td>
                            <td className="p-2 text-red-600">₹20</td>
                            <td className="p-2 text-green-600">₹80</td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-2">07 May 2025</td>
                            <td className="p-2 text-green-600">₹500</td>
                            <td className="p-2 text-red-600">₹333</td>
                            <td className="p-2 text-green-600">₹167</td>
                        </tr>
                        <tr className="bg-gray-50 border-t">
                            <td className="p-2">06 May 2025</td>
                            <td className="p-2 text-green-600">₹0</td>
                            <td className="p-2 text-red-600">₹122</td>
                            <td className="p-2 text-green-600">₹-122</td>
                        </tr>
                        <tr className="border-t">
                            <td className="p-2">01 May 2025</td>
                            <td className="p-2 text-green-600">₹500</td>
                            <td className="p-2 text-red-600">₹0</td>
                            <td className="p-2 text-green-600">₹500</td>
                        </tr>
                        <tr className="bg-gray-50 border-t">
                            <td className="p-2">01 May 2025</td>
                            <td className="p-2 text-green-600">₹0</td>
                            <td className="p-2 text-red-600">₹200</td>
                            <td className="p-2 text-green-600">₹-200</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >


    )
}

export default ViewReport
