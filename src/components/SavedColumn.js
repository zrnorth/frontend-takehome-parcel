import React from "react";

import SearchResults from "./SearchResults";

const SavedColumn = () => {
  const storedItemsMap = JSON.parse(localStorage.getItem("savedItems"));
  let savedItems = [];
  if (storedItemsMap) {
    Object.keys(storedItemsMap).forEach(name => {
      const { info, version } = storedItemsMap[name];
      savedItems.push({ name, info, version });
    });
  }

  return (
    <div className="column">
      <div className="ui center aligned header">Saved Gems</div>
      <div className="column">
        <SearchResults results={savedItems} />
      </div>
    </div>
  );
};

export default SavedColumn;
