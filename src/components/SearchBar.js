import React from "react";

const SearchBar = () => {
  return (
    <div className="ui fluid icon input">
      <input type="text" placeholder="Search for ruby gems..." />
      <i className="search icon" />
    </div>
  );
};

export default SearchBar;
