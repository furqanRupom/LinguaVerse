import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayouts = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1 bg-slate-900  md:ml-64">
        <div className="p-5 py-12 lg:my-12 mx-4 ring-4 rounded-xl min-h-screen bg-white ring-[#0eb582]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
