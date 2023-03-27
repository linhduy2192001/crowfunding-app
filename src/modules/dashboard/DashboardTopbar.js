import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import DashBoardFund from "./DashBoardFund";
import DashBoardSearch from "./DashBoardSearch";

const DashboardTopbar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to="/ " className="inline-block">
          <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        </Link>
        <div className="ml-14 max-w-[458px] w-full">
          <DashBoardSearch></DashBoardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashBoardFund></DashBoardFund>
        <Button
          type="button"
          className=" px-7"
          href="/start-campaign"
          kind="secondary"
        >
          Start a campaign
        </Button>
        <img
          srcSet="/logo.png 2x"
          alt="crowfunding-app"
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardTopbar;
