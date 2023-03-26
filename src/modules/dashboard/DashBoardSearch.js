import React from "react";

const DashBoardSearch = () => {
  return (
    <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218, 213, 213, 0.15)] p-2 w-full max-w-[458px] flex items-center">
      <div className="flex-1 px-5">
        <input
          type="text"
          className="w-full text-sm bg-transparent placeholder:text-text4 text-text1"
          placeholder="Do fundrise now"
        />
      </div>
      <button className="rounded-full w-[72px] bg-primary h-10 flex items-center justify-center text-white flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default DashBoardSearch;
