import { Outlet } from "react-router-dom";
import Bottombar from "@/components/shared/BottomBar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Topbar from "@/components/shared/Topbar";

const AppLayoute = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default AppLayoute;
