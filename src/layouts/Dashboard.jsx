import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import Tasks from "../pages/dashboard/Tasks";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="relative lg:flex">
      <Sidebar />
      <div className="flex-1 my-5 lg:ml-96 lg:mr-16">
        <DashboardNavbar />
        {location?.pathname == "/dashboard" ? <Tasks /> : <Outlet />}
      </div>
    </div>
  );
};

export default Dashboard;
