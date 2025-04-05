// import React from "react";
// import Content from "../Content";
// import MonthSidebar from "../MonthSidebar";

import Content from "../Content";
import { ModeToggle } from "../ModeToggle";
import MonthSidebar from "../MonthSidebar";

// const { ModeToggle } = require("../ModeToggle");

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

// import React from "react";
// import Content from "../Content";
// import MonthSidebar from "../MonthSidebar";

// function DefaultLayOut() {
//     return (
//         <div className="flex h-screen bg-[#1B1B1B]">
//             <MonthSidebar />
//             <div className="flex-1 p-4 overflow-y-auto">
//                 <Content />
//             </div>
//         </div>
//     );
// }

// export default DefaultLayOut;




function DefaultLayout() {
  return (
    <div className="flex">
      <MonthSidebar/>
      <div className="flex-1 p-4">
        <div className="flex justify-end mb-4">
          <ModeToggle />
        </div>
        <Content/>
      </div>
    </div>
  )
}
export default DefaultLayout;
