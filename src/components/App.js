import React from "react";

import SearchColumn from "./SearchColumn";
import SavedColumn from "./SavedColumn";

class App extends React.Component {
  state = { savedItems: [] };

  // Since we store the items as { name: { info, version }} to avoid duplicates in localStorage,
  // we have to transpose this into { name, info, version } to list the results easily.
  // Created this helper function to make it easier.
  convertItemsMapToArray = itemsMap => {
    let savedItems = [];
    if (!itemsMap) {
      return savedItems;
    }

    Object.keys(itemsMap).forEach(name => {
      const { info, version } = itemsMap[name];
      savedItems.push({ name, info, version });
    });
    return savedItems;
  };

  componentDidMount() {
    const storedItemsMap = JSON.parse(localStorage.getItem("savedItems"));
    this.setState({ savedItems: this.convertItemsMapToArray(storedItemsMap) });
  }

  addItemToState = ({ name, info, version }) => {
    // Store the new item like {name: {info, version}} so we don't store more
    // than one gem with the same name.
    const newItem = { [name]: { info, version } };
    const curr = JSON.parse(localStorage.getItem("savedItems"));
    const newItemsMap = { ...curr, ...newItem };

    localStorage.setItem("savedItems", JSON.stringify(newItemsMap));
    this.setState({ savedItems: this.convertItemsMapToArray(newItemsMap) });
  };

  removeItemFromState = ({ name }) => {
    let savedItemsMap = JSON.parse(localStorage.getItem("savedItems"));
    delete savedItemsMap[name];

    localStorage.setItem("savedItems", JSON.stringify(savedItemsMap));
    this.setState({ savedItems: this.convertItemsMapToArray(savedItemsMap) });
  };

  render() {
    console.log(this.state.savedItems);
    return (
      <div className="ui two column stackable grid container">
        <SearchColumn buttonAction={this.addItemToState} />
        <SavedColumn
          savedItems={this.state.savedItems}
          buttonAction={this.removeItemFromState}
        />
      </div>
    );
  }
}

export default App;
