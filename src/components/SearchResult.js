import React from "react";

const SearchResult = ({ name, info, version, onButtonClick }) => {
  return (
    <div className="item">
      <div className="content">
        <span className="header">{name}</span>
        <button
          className="ui right floated circular green icon button"
          onClick={() => onButtonClick(name, info, version)}
        >
          <i class="icon plus" />
        </button>
        <div className="meta">{version}</div>
        <div className="description">{info}</div>
      </div>
    </div>
  );
};

export default SearchResult;
