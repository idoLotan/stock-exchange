import { Icon } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <div class="relative">
      <input
        class="border-left-0 h-8 w-96 rounded-l-lg border pl-2 focus:outline-none"
        type="text"
      />
      <i
        className={`fas fa-search  h-8 rounded-r-lg bg-gray-400 pb-[8px] pl-5 pr-5 pt-[8.5px]`}
      ></i>
      <div class="absolute left-4 top-1/2 -translate-y-1/2 transform cursor-pointer"></div>
    </div>
  );
};

export default SearchBar;
