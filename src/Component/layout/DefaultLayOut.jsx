// import { useState } from "react";
// import Content from "../Content";
// // import { ModeToggle } from "../ModeToggle";
// import MonthSidebar from "../MonthSidebar";
// // import { useDispatch, useSelector } from "react-redux";
// // import { setIsSidebarOpen } from "../slice/AuthSlice";

import { useDispatch, useSelector } from "react-redux"
import Content from "../Content"
import MonthSidebar from "../MonthSidebar"
import { setIsSidebarOpen } from "../slice/AuthSlice"
import { useEffect, useState } from "react"

// function DefaultLayout() {
//   // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   // const {isSidebarOpen} = useSelector((state) => state.auth)
//   // const dispatch = useDispatch()

//   // const handleDrowerSidebar = () => {
//   //   dispatch(setIsSidebarOpen(!is))
//   // }
//   return (
//     <div className="flex">
//       <MonthSidebar />
//       <div className="flex-1 p-4">
//         {/* <div className="flex justify-end mb-4"> */}
//           {/* <ModeToggle /> */}
//         {/* </div> */}
//         <Content />
//       </div>
//     </div>
//   )
// }
// export default DefaultLayout;


const DefaultLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const { isSidebarOpen } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleDrowerSidebar = () => {
    dispatch(setIsSidebarOpen(!isSidebarOpen));
  }

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      if (!isMobileView) {
        dispatch(setIsSidebarOpen(true));
      } else {
        dispatch(setIsSidebarOpen(false));
      }
    }

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [dispatch])

  return (
    <div className="flex h-screen relative">
      {/* Sidebar */}
      <div 
        className={`${
          isMobile 
            ? 'fixed inset-y-0 left-0 z-50' 
            : 'relative'
        } ${
          isSidebarOpen 
            ? 'w-72' 
            : 'w-20'
        } transition-all duration-300 ease-in-out bg-[#121A2E] text-white h-full overflow-hidden`}
      >
        <MonthSidebar 
          openSidebar={isSidebarOpen}
          handleOpen={handleDrowerSidebar}
        />
      </div>

      {/* Main Content */}
      <div 
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? '' : ''
        }`}
      >
        <div className="">
          <Content />
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleDrowerSidebar}
        />
      )}
    </div>
  )
}

export default DefaultLayout