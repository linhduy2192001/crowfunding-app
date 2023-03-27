import React from "react";
import { useForm } from "react-hook-form";

const CampaignAddNew = () => {
  const { handleSubmit } = useForm();
  return (
    <div className="py-10 bg-white rounded-xl px-[66px]">
      <div className="text-center">
        <h1 className="py-4 font-bold px-14 bg-text4 bg-opacity-5 rounded-xl text-[25px] inline-block mb-10">
          Start a Campaign 🚀
        </h1>
        <form></form>
      </div>
    </div>
  );
};

export default CampaignAddNew;
