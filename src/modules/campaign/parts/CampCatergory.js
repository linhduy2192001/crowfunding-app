import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../../components/icon";
import classNames from "../../../utils/classNames";

const CampCatergory = ({ text = "Education", className = "text-xs" }) => {
  return (
    <div>
      <Link
        to="/"
        className={classNames(
          "flex items-baseline mb-4   font-medium gap-x-3 text-text3",
          className
        )}
      >
        <IconFolder></IconFolder>
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default CampCatergory;
