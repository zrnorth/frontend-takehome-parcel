import React from "react";

import SearchBar from "./SearchBar";

const SearchColumn = () => {
  return (
    <div className="column">
      <SearchBar />
      <div className="ui center aligned header">Search Results</div>
    </div>
  );
};

export default SearchColumn;
