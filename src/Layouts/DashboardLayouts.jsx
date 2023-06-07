import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayouts = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1 bg-slate-900  md:ml-64">
        <div className="p-5 py-12 ring-4 rounded-xl bg-white ring-[#0eb582]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
