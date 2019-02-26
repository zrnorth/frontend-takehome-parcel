import React from "react";

import List from "./List";

class SavedColumn extends React.Component {
  render() {
    return (
      <div className="column">
        <div className="ui center aligned header">Saved Gems</div>
        <List
          items={this.props.savedItems}
          buttonType={this.props.buttonType}
        />
      </div>
    );
  }
}

export default SavedColumn;
