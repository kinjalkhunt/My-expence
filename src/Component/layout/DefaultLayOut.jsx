// import React from "react";
// import Content from "../Content";
// import MonthSidebar from "../MonthSidebar";

// function DefaultLayOut() {
//     return (
//         <div>
//             <MonthSidebar/>
//             <div>
//                 <Content />
//             </div>
//         </div>
//     );
// }

// export default DefaultLayOut;

import React from "react";
import Content from "../Content";
import MonthSidebar from "../MonthSidebar";

function DefaultLayOut() {
    return (
        <div className="flex h-screen bg-[#1B1B1B]">
            <MonthSidebar />
            <div className="flex-1 p-4 overflow-y-auto">
                <Content />
            </div>
        </div>
    );
}

export default DefaultLayOut;
