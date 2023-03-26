import React from "react";
import DashBoardSearch from "./DashBoardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-x-14">
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        <DashBoardSearch></DashBoardSearch>
      </div>
    </div>
  );
};

export default DashboardTopbar;
