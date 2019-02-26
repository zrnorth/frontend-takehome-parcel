import React from "react";

import ListItem from "./ListItem";

class List extends React.Component {
  renderitems() {
    if (!this.props.items) {
      return null;
    }
    return this.props.items.map(result => {
      return (
        <ListItem
          name={result.name}
          info={result.info}
          version={result.version}
          buttonType={this.props.buttonType}
          key={result.name}
        />
      );
    });
  }

  render() {
    return <div className="ui divided items">{this.renderitems()}</div>;
  }
}

export default List;
