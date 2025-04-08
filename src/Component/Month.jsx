import { useParams } from "react-router-dom";

export const Month = () => {
    const { monthName } = useParams();

    return (
        <div className="w-full h-full flex items-center justify-center py-8">
            <div className="p-6 w-full max-w-4xl bg-[#0B0B0B] border rounded-3xl">
                <h1 className="text-3xl text-white font-bold capitalize">{monthName || "Month"}</h1>
                <p className="mt-2 text-white">
                    Details for the month of {monthName || "this month"}...
                </p>
            </div>
        </div>
    );
};