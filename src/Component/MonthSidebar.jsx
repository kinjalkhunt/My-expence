import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import { LuNotebookPen } from "react-icons/lu";
import { IoHome } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

function MonthSidebar({ openSidebar, handleOpen }) {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const isMobile = window.innerWidth < 768;

  const email = localStorage.getItem("email");
  const name = localStorage.getItem("displayName");
  const rname = localStorage.getItem("rname");
  const remail = localStorage.getItem("remail");
  const profileInitial = email ? email[0].toUpperCase() : "M";

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Navigation Items
  const navItems = [
    { path: "/home", icon: <IoHome />, label: "Home" },
    { path: "/customers", icon: <IoMdContacts />, label: "Customers" },
    { path: "/Expence", icon: <LuNotebookPen />, label: "Expenses" },
    { path: "/settings", icon: <IoIosSettings />, label: "Settings" },
  ];

  // Mobile Navigation
  if (isMobile) {
    return (
      <div className="flex justify-around items-center h-16 bg-[#121A2E] text-white">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className="flex flex-col items-center justify-center w-full h-full text-gray-300 hover:text-white"
          >
            <div className="text-xl text-blue-400">{item.icon}</div>
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    );
  }

  // Desktop Navigation
  return (
    <div ref={sidebarRef} className="h-full">
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
              <div className="flex flex-col items-center gap-2">
                <IoBookSharp className="h-8 w-8" />
                <span >
                  <div className="py-6">
                    <div className="bg-[#E83E8C] text-white w-10 h-10 flex items-center justify-center rounded-md text-xl font-bold">
                      {(profileInitial || email || remail)?.[0]?.toUpperCase() || "M"}
                    </div>
                  </div>
                </span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Profile Section */}
      {openSidebar && (
        <div className="p-4 flex items-center bg-[#1A2338] mb-2">
          <div className="bg-[#E83E8C] text-white w-10 h-10 flex items-center justify-center rounded-md text-xl font-bold">
            {(profileInitial || email || remail)?.[0]?.toUpperCase() || "M"}
          </div>
          <div className="ml-3">
            <div className="text-gray-400 text-xs">{name || rname}</div>
            <div className="flex items-center">
              <span className="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
              <span className="text-green-500 text-xs">Online</span>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Items */}
      <div className="mt-20">
        {openSidebar && (
          <div className="px-4 py-2">
            <h2 className="text-blue-400 text-xs font-semibold uppercase tracking-wider">LEDGER MANAGEMENT</h2>
          </div>
        )}
        <ul className="px-2">
          {navItems.map((item) => (
            <li
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`flex items-center ${openSidebar ? 'gap-4' : 'justify-center'} text-gray-300 p-4 rounded hover:bg-[#1A2338] cursor-pointer`}
            >
              <div className="text-blue-400 text-xl">
                {item.icon}
              </div>
              {openSidebar && <span>{item.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MonthSidebar;