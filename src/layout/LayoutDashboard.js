import React from "react";
import ReactModal from "react-modal";
import { Outlet } from "react-router-dom";
import { Button } from "../components/button";
import Overlay from "../components/common/Overlay";
import CampaginPerk from "../modules/campaign/CampaginPerk";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import DashboardTopbar from "../modules/dashboard/DashboardTopbar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-lite ">
      {/* <div className="fixed inset-0 z-40 bg-black overlay bg-opacity-10"></div> */}
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
        className="modal-content w-full max-w-[521px] bg-white rounded-2xl  outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
      >
        <button className=" w-11 h-11 flex justify-center items-center absolute z-10 right-10 top-[10px] text-text1 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="font-bold text-[25px] mb-10 text-center">
          Back this project
        </h2>
        <p className="mb-10">Enter the contribute amount</p>
        <input
          type="text"
          placeholder="$10"
          name="amount"
          className="text-lg font-medium py-2 px-5 border border-strock w-full rounded "
        ></input>
        <p className="text-text3 my-5 text-sm">
          Contribution are not associatied with perks
        </p>
        <Button className="bg-primary text-white">Continue</Button>
        <div className="mt-[60px]"></div>
        <CampaginPerk showButton></CampaginPerk>
      </ReactModal>
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
