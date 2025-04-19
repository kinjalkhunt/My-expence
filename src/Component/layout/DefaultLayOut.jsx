
import Content from "../Content";
import { ModeToggle } from "../ModeToggle";
import MonthSidebar from "../MonthSidebar";

function DefaultLayout() {
  return (
    <div className="flex">
      <MonthSidebar />
      <div className="flex-1 p-4">
        <div className="flex justify-end mb-4">
          <ModeToggle />
        </div>
        <Content />
      </div>
    </div>
  )
}
export default DefaultLayout;
