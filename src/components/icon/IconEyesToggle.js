import React from "react";

const IconEyesToggle = ({ open = false, onClick = () => {} }) => {
  if (open)
    return (
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onClick}
      >
        <path
          d="M3 12C3 12 6.27273 5 12 5C17.7273 5 21 12 21 12C21 12 17.7273 19 12 19C6.27273 19 3 12 3 12Z"
          stroke="#A2A2A8"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
          stroke="#A2A2A8"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  return (
    <svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M11.7345 12.855C11.5098 13.1129 11.2388 13.3198 10.9378 13.4632C10.6367 13.6067 10.3116 13.6839 9.98207 13.6901C9.6525 13.6963 9.32513 13.6315 9.0195 13.4994C8.71387 13.3674 8.43623 13.1709 8.20315 12.9216C7.97007 12.6724 7.78632 12.3755 7.66287 12.0486C7.53942 11.7217 7.47879 11.3716 7.48461 11.0192C7.49042 10.6667 7.56256 10.3191 7.69672 9.99713C7.83087 9.67513 8.0243 9.38533 8.26545 9.14501M14.86 16.1975C13.4614 17.3376 11.7584 17.9693 10 18C4.27273 18 1 11 1 11C2.01773 8.97167 3.42929 7.19955 5.14 5.80252L14.86 16.1975ZM8.28182 4.21002C8.845 4.06904 9.4216 3.99857 10 4.00002C15.7273 4.00002 19 11 19 11C18.5033 11.9937 17.911 12.9292 17.2327 13.7913L8.28182 4.21002Z"
        stroke="#A2A2A8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 1.5L19 20"
        stroke="#A2A2A8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconEyesToggle;
