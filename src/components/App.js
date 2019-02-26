import React from "react";

import SearchColumn from "./SearchColumn";
import SavedColumn from "./SavedColumn";

const App = () => {
  return (
    <div className="ui two column stackable grid container">
      <SearchColumn />
      <SavedColumn />
    </div>
  );
};

export default App;
