import React from "react";

const SearchResult = ({ name, info, version }) => {
  return (
    <div className="item">
      <div className="content">
        <span class="header">{name}</span>
        <div class="meta">{version}</div>
        <div class="description">{info}</div>
      </div>
    </div>
  );
};

export default SearchResult;
