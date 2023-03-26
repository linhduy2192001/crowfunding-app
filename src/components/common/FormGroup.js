import React from "react";

const FormGroup = ({ children }) => {
  return (
    <div className="flex flex-col b-4 lg:mb-5 gap-y-2 lg:gap-y-3 ">
      {" "}
      {children}
    </div>
  );
};

export default FormGroup;
