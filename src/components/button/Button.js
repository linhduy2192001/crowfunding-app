import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "button", children, className = "" }) => {
  return (
    <button
      className={`flex items-center justify-center p-4 text-base text-white font-semibold rounded-xl ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,

  children: PropTypes.node,
};

export default Button;
