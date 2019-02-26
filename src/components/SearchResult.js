import React from "react";

const SearchResult = ({
  name,
  info,
  version,
  onButtonClick,
  buttonIcon,
  buttonColor
}) => {
  return (
    <div className="item">
      <div className="content">
        <span className="header">{name}</span>
        <button
          className={`ui right floated circular ${buttonColor} icon button`}
          onClick={() => onButtonClick({ name, info, version })}
        >
          <i className={`icon ${buttonIcon}`} />
        </button>
        <div className="meta">{version}</div>
        <div className="description">{info}</div>
      </div>
    </div>
  );
};

export default SearchResult;
