import { useNavigate, useParams } from "react-router-dom";

function MonthSidebar() {
  const { monthName } = useParams();
  const navigate = useNavigate();

  const email = localStorage.getItem("userEmail");
  const profileInitial = email ? email[0].toUpperCase() : "";

  const months = [
    { id: 1, name: "Home" },
    { id: 2, name: "Expense" },
    { id: 3, name: "Month" },
  ];

  const handleMonthClick = (monthName) => {
    if (monthName.toLowerCase() === "home") {
      navigate("/home");
    } else if (monthName.toLowerCase() === "expense") {
      navigate("/Expence");
    } else if (monthName.toLowerCase() === "month") {
      navigate("/month");
    }
  };

  return (
    <div className="w-40 xs:w-48 sm:w-56 md:w-64 h-screen bg-[#1B1B1B] p-1.5 xs:p-2 sm:p-3 md:p-4 fixed left-0 top-0 z-50">
      {/* Profile Letter */}
      <div className="w-full flex justify-start items-center mb-2 xs:mb-3 sm:mb-4 md:mb-6">
        <div className="bg-blue-600 text-white w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full text-base xs:text-lg sm:text-xl md:text-2xl font-bold">
          {profileInitial}
        </div>
      </div>

      <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2 mt-1.5 xs:mt-2 sm:mt-3 md:mt-4">
        {months.map((month) => (
          <li
            key={month.id}
            onClick={() => handleMonthClick(month.name)}
            className="w-full text-white p-1 xs:p-1.5 sm:p-2 rounded hover:bg-white hover:text-black cursor-pointer transition-colors duration-200"
          >
            <span className="text-sm xs:text-base sm:text-lg md:text-xl px-1.5 xs:px-2 sm:px-2.5 md:px-3 font-semibold">{month.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MonthSidebar;