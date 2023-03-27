import React from "react";
import { defaultImage } from "../../../constants/global";

const CampAuthor = ({ image = defaultImage, author = "Mahfuzul Nabil" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img src={image} className="w-8 h-8 rounded-full objiect-cover" alt="" />
      <p className="text-xs text-text3">
        by {""}
        <span className="font-semibold text-text2">{author}</span>
      </p>
      ;
    </div>
  );
};

export default CampAuthor;
