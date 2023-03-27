import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent animate-spin"></div>
  ) : (
    children
  );
  let defaulClassName =
    "flex items-center justify-center p-4 text-base font-semibold min-h-[56px] rounded-xl ";

  switch (rest.kind) {
    case "primary":
      defaulClassName = defaulClassName + "bg-primary text-white";
      break;
    case "secondary":
      defaulClassName = defaulClassName + "bg-secondary text-white";
      break;
    case "ghost":
      defaulClassName =
        defaulClassName + "bg-secondary bg-opacity-10 text-secondary";
      break;
    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={classNames(defaulClassName, className)}>
        {child}
      </Link>
    );
  return (
    <button
      className={classNames(
        defaulClassName,
        isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};

export default Button;
