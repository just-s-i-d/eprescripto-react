import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar/sidebar";
import "../styles/dashboard.css"
const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};
export default DashboardLayout;
