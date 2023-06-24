import React from "react";

const Btn = ({ onClick }) => {
  return (
    <div className="mt-5 flex" onClick={onClick}>
      <div className="inline-flex items-center  rounded-lg bg-green-700  px-5 py-3 text-center text-base font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-900 ">
        Get started
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Btn;
