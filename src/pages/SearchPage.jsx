import React from "react";
import SearchBar from "../components/SearchBar";
import { Icon } from "@mui/material";

const SearchPage = () => {
  return (
    <div class="flex h-[50vh] items-center justify-center">
      <SearchBar></SearchBar>
      <Icon Icon={"user"} />
    </div>
  );
};

export default SearchPage;
