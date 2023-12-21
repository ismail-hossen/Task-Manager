import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1 md:ml-80 md:mr-10">
        <DashboardNavbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
