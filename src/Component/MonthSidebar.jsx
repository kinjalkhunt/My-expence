import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

function MonthSidebar({ openSidebar, handleOpen }) {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);

  const email = localStorage.getItem("email");
  const name = localStorage.getItem("displayName")
  const profileInitial = email ? email[0].toUpperCase() : "M";
  // const profileName = name  ? name[0].toUpperCase(): email
  // console.log(">>>>>>>>>", profileInitial);


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
              <span className="text-xl font-bold border-b"><IoBookSharp className="h-10 w-10" /></span>
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
            <div className="text-gray-400 text-xs">{name || "user@example.com"}</div>
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
              <IoHome />
            </div>
            <span>Home</span>
          </li>
          <li onClick={() => handleNavigation("/customers")}
            className="flex items-center gap-3 text-gray-300 p-2 rounded hover:bg-[#1A2338] cursor-pointer">
            <div className="text-blue-400">
              <IoMdContacts />
            </div>
            <span>Customers</span>
          </li>
          <li onClick={() => handleNavigation("/Expence")}
            className="flex items-center gap-3 text-gray-300 p-2 rounded hover:bg-[#1A2338] cursor-pointer">
            <div className="text-blue-400">
              <LuNotebookPen />
            </div>
            <span>Expenses</span>
          </li>
          <li onClick={() => handleNavigation("/settings")}
            className="flex items-center gap-3 text-gray-300 p-2 rounded hover:bg-[#1A2338] cursor-pointer">
            <div className="text-blue-400">
              <IoIosSettings />
            </div>
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MonthSidebar;