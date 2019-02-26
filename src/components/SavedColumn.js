import React from "react";

import SearchResults from "./SearchResults";

class SavedColumn extends React.Component {
  render() {
    return (
      <div className="column">
        <div className="ui center aligned header">Saved Gems</div>
        <SearchResults
          results={this.props.savedItems}
          buttonType={this.props.buttonType}
        />
      </div>
    );
  }
}

export default SavedColumn;
