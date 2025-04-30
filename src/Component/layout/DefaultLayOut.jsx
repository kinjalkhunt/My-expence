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
      <div
        className={`${
          isMobile ? "fixed inset-y-0 left-0 z-50" : "relative"
        } ${isSidebarOpen ? "w-72" : "w-20"} transition-all duration-300 ease-in-out bg-[#121A2E] text-white h-full overflow-hidden`}
      >
        <MonthSidebar openSidebar={isSidebarOpen} handleOpen={handleDrawerSidebar} />
      </div>

      <div className="flex-1 transition-all duration-300 ease-in-out">
        <Content />
      </div>

      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleDrawerSidebar}
        />
      )}
    </div>
  );
};

export default DefaultLayout;
