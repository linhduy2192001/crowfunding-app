import React from "react";
import CampCatergory from "./parts/CampCatergory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignFeature = () => {
  return (
    <div className="flex items-center w-full gap-x-8 max-w-[1048px]">
      <CampImage className="h-[266px] flex flex-1 "></CampImage>
      <div className=" flex-1 max-w-[435px]">
        <CampCatergory text="Architecture" className="text-sm "></CampCatergory>
        <CampTitle className="mb-4 text-xl font-bold">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className="mb-6 text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>
        <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
          <div className="w-2/4 h-full rounded-full bg-primary"></div>
        </div>
        <div className="flex items-start justify-between gap-x-5">
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
