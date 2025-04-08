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
        navigate("/month"); // Updated to lowercase
      }
  };

  return (
    <div className="w-64 h-screen bg-[#1B1B1B] p-4">
      {/* 👇 Profile Letter */}
      <div className="w-full flex justify-start items-center mb-6">
        <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold">
          {profileInitial}
        </div>
      </div>

      <ul className="space-y-2 mt-4">
        {months.map((month) => (
          <li
            key={month.id}
            onClick={() => handleMonthClick(month.name)}
            className="w-full text-white p-2 rounded hover:bg-white hover:text-black cursor-pointer"
          >
            <span className="text-xl px-3 font-semibold">{month.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MonthSidebar;