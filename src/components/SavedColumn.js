import React from "react";

import SearchResults from "./SearchResults";

class SavedColumn extends React.Component {
  onResultButtonClick(name, info, version) {
    let savedItems = JSON.parse(localStorage.getItem("savedItems"));
    delete savedItems[name];
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
  }

  render() {
    return (
      <div className="column">
        <div className="ui center aligned header">Saved Gems</div>
        <div className="column">
          <SearchResults
            results={this.props.savedItems}
            onButtonClick={this.props.buttonAction}
            buttonIcon="minus"
            buttonColor="red"
          />
        </div>
      </div>
    );
  }
}

export default SavedColumn;
