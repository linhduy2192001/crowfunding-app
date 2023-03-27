import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../components/icon";
import CampAuthor from "./parts/CampAuthor";
import CampCatergory from "./parts/CampCatergory";
import CampDesc from "./parts/CampDesc";
import CampImage from "./parts/CampImage";
import CampMeta from "./parts/CampMeta";
import CampTitle from "./parts/CampTitle";

const CampaignItem = () => {
  return (
    <div>
      <CampImage></CampImage>
      <div className="px-5 py-4">
        <CampCatergory text="Education"></CampCatergory>
        <CampTitle>Powered Kits Learning Boxes</CampTitle>
        <CampDesc></CampDesc>
        <div className="flex items-start justify-between mb-5 gap-inset-x-52">
          <CampMeta></CampMeta>
          <CampMeta></CampMeta>{" "}
        </div>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
