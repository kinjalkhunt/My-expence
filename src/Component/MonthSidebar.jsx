import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
function MonthSidebar({ openSidebar, handleOpen }) {
  const { monthName } = useParams();
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  const email = localStorage.getItem("userEmail");
  const profileInitial = email ? email[0].toUpperCase() : "M";

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        openSidebar &&
        window.innerWidth < 768
      ) {
        handleOpen();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSidebar, handleOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`h-full ${openSidebar ? "w-full" : "w-14"} transition-all duration-300 ease-in-out`}>
      {/* Header with Logo */}
      <div className="h-[3.7rem] px-1 py-2 shadow-2xl shadow-black">
        <div className="flex items-center">
          <button
            onClick={handleOpen}
            className="text-[#b1bad3] hover:text-white ml-3 mt-2 focus:outline-none flex items-center"
            aria-label="Toggle Sidebar"
          >
            {openSidebar ? (
              <div className="flex items-center">
                <span className="text-xl font-bold">MyExpences</span>
                <span className="bg-red-600 text-white text-xs px-1 rounded ml-1">PRO</span>
              </div>
            ) : (
              <span className="text-xl font-bold border-b"><IoBookSharp className="h-10 w-10"/></span>
            )}
          </button>
        </div>
     
      </div>

      {/* Rest of the sidebar content */}
      <div className={`${openSidebar ? "block" : "hidden"}`}>
        {/* Profile Section */}
        <div className="p-4 flex items-center bg-[#1A2338] mb-2">
          <div className="bg-[#E83E8C] text-white w-10 h-10 flex items-center justify-center rounded-md text-xl font-bold">
            {profileInitial}
          </div>
          <div className="ml-3">
            {/* <div className="text-white text-sm font-medium">My Business</div> */}
            <div className="text-gray-400 text-xs">{email || "user@example.com"}</div>
            <div className="flex items-center">
              <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
              <span className="text-green-500 text-xs">Online</span>
            </div>
          </div>
        </div>

        {/* Ledger Management Header */}
        <div className="px-4 py-2">
          <h2 className="text-blue-400 text-xs font-semibold uppercase tracking-wider">LEDGER MANAGEMENT</h2>
        </div>

        {/* Menu Items */}
        <ul className="flex-1 px-2">
          <li onClick={() => handleNavigation("/home")}
            className="flex items-center gap-3 text-gray-300 p-2 rounded hover:bg-[#1A2338] cursor-pointer">
            <div className="text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <span>Home</span>
          </li>
          <li onClick={() => handleNavigation("/customers")}
            className="flex items-center gap-3 text-gray-300 p-2 rounded hover:bg-[#1A2338] cursor-pointer">
            <div className="text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <span>Customers</span>
          </li>
          <li onClick={() => handleNavigation("/Expence")}
            className="flex items-center gap-3 text-gray-300 p-2 rounded hover:bg-[#1A2338] cursor-pointer">
            <div className="text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Expenses</span>
          </li>
          <li onClick={() => handleNavigation("/settings")}
            className="flex items-center gap-3 text-gray-300 p-2 rounded hover:bg-[#1A2338] cursor-pointer">
            <div className="text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MonthSidebar;