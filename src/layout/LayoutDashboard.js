import React from "react";
import Overlay from "../components/common/Overlay";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-lite ">
      {/* <div className="fixed inset-0 z-40 bg-black overlay bg-opacity-10"></div> */}
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1"> {children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
