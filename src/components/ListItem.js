import React from "react";

const ListItem = ({ name, info, version, buttonType }) => {
  // default button types in case they don't customize all fields
  const action = buttonType && buttonType.action ? buttonType.action : null;
  const icon = buttonType && buttonType.icon ? buttonType.icon : "circle";
  const color = buttonType && buttonType.color ? buttonType.color : "blue";
  return (
    <div className="item">
      <div className="content">
        <span className="header">{name}</span>
        {action && ( // If there's no button action, don't render a useless button.
          <button
            className={`ui right floated circular ${color} icon button`}
            onClick={() => action({ name, info, version })}
          >
            <i className={`icon ${icon}`} />
          </button>
        )}
        <div className="meta">{version}</div>
        <div className="description">{info}</div>
      </div>
    </div>
  );
};

export default ListItem;
