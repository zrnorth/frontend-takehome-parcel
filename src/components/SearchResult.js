import React from "react";

const SearchResult = ({ name, info, version, buttonType }) => {
  const { action, icon, color } = buttonType;
  return (
    <div className="item">
      <div className="content">
        <span className="header">{name}</span>
        <button
          className={`ui right floated circular ${color} icon button`}
          onClick={() => action({ name, info, version })}
        >
          <i className={`icon ${icon}`} />
        </button>
        <div className="meta">{version}</div>
        <div className="description">{info}</div>
      </div>
    </div>
  );
};

export default SearchResult;
