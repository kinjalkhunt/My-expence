import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../Content";
import MonthSidebar from "../MonthSidebar";
import { setIsSidebarOpen } from "../slice/AuthSlice";

const DefaultLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleDrawerSidebar = () => {
    dispatch(setIsSidebarOpen(!isSidebarOpen));
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      dispatch(setIsSidebarOpen(!isMobileView));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div className="flex h-screen relative">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <div className={`${isSidebarOpen ? "w-72" : "w-20"} transition-all duration-300 ease-in-out bg-[#121A2E] text-white h-full overflow-hidden`}>
          <MonthSidebar openSidebar={isSidebarOpen} handleOpen={handleDrawerSidebar} />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Content />
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#121A2E]">
          <MonthSidebar openSidebar={isSidebarOpen} handleOpen={handleDrawerSidebar} />
        </div>
      )}
    </div>
  );
};

export default DefaultLayout;
