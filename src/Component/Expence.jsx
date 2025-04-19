import { useParams } from "react-router-dom";

const Expence = () => {
    const { monthName } = useParams();
    return (
        <div className="w-full h-full flex items-center justify-center py-2 xs:py-4 sm:py-6 md:py-8 px-2 xs:px-4">
            <div className="p-2 xs:p-4 sm:p-5 md:p-6 w-full max-w-4xl bg-[#0B0B0B] border rounded-xl xs:rounded-2xl sm:rounded-3xl">
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-white font-bold capitalize">Expence</h1>
                <p className="mt-1 xs:mt-2 text-xs xs:text-sm sm:text-base md:text-lg text-white">
                    Details for the Expence...
                </p>
            </div>
        </div>
    )
}
export default Expence;