import React, { Fragment } from "react";
import { Button } from "../../components/button";
import { defaultImage } from "../../constants/global";
import CampaginPerk from "./CampaginPerk";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import CampaignSupport from "./CampaignSupport";
import CampCatergory from "./parts/CampCatergory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";
import CampViewAuthor from "./parts/CampViewAuthor";

const CampaignView = () => {
  return (
    <Fragment>
      <div className="h-[140px] text-[40px] font-bold rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white mb-10 gradient-banner">
        <h1>Education</h1>
      </div>
      <div className="flex items-start w-full gap-x-10 max-w-[1066px]">
        <div className=" flex-1">
          <CampImage className="h-[398px] mb-8 "></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src={defaultImage}
                  alt=""
                  className="w-[89px] h-[70px] rounded-lg object-cover"
                />
              ))}
          </div>
        </div>
        <div className=" flex-1 max-w-[443px]">
          <CampCatergory
            text="Architecture"
            className="text-sm "
          ></CampCatergory>
          <CampTitle className="mb-4 text-xl font-bold">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between gap-x-5 mb-4">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button className="w-full text-white bg-primary">
            Back this project
          </Button>
        </div>
      </div>
      <div
        className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-200
] mb-6"
      >
        <div className="flex items-center gap-x-14 text-sm font-medium text-text3">
          <span className="cursor-pointer text-secondary">Campgain</span>
        </div>
        <Button className="bg-primary text-white px-9 py-3">
          Back this project
        </Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr]  mb-[70px">
        <div>
          <h2 className="text-lg font-semibold uppercase mb-5">STORY</h2>
          <div className="bg-white w-full "></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]]">
            <CampaginPerk></CampaginPerk>
            <CampaginPerk></CampaginPerk>
            <CampaginPerk></CampaginPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </Fragment>
  );
};

export default CampaignView;
