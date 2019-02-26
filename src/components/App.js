import React from "react";

import SearchColumn from "./SearchColumn";
import SavedColumn from "./SavedColumn";

class App extends React.Component {
  state = { savedItems: [] };

  // Since we store the items as { name: { info, version }} to avoid duplicates,
  // we have to transpose this into { name, info, version } to list the items easily.
  // Created this helper function to make it easier when we pass down to components.
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

  // Adds an item both to React state and localstorage
  addItemToState = ({ name, info, version }) => {
    const savedItems = JSON.parse(localStorage.getItem("savedItems"));
    const newItem = { [name]: { info, version } };
    const newItemsMap = { ...savedItems, ...newItem };

    localStorage.setItem("savedItems", JSON.stringify(newItemsMap));
    this.setState({ savedItems: newItemsMap });
  };

  // Removes an item both from React state and localstorage
  removeItemFromState = ({ name }) => {
    let savedItems = JSON.parse(localStorage.getItem("savedItems"));
    delete savedItems[name];

    localStorage.setItem("savedItems", JSON.stringify(savedItems));
    this.setState({ savedItems });
  };

  componentDidMount() {
    // Hydrate our saved items from localstorage
    const savedItems = JSON.parse(localStorage.getItem("savedItems"));
    this.setState({ savedItems });
  }

  render() {
    const savedItemsAsArray = this.convertItemsMapToArray(
      this.state.savedItems
    );
    return (
      <div
        className="ui two column stackable grid container"
        style={{ marginTop: 10 }}
      >
        <SearchColumn
          buttonType={{
            action: this.addItemToState,
            icon: "plus",
            color: "green"
          }}
        />
        <SavedColumn
          savedItems={savedItemsAsArray}
          buttonType={{
            action: this.removeItemFromState,
            icon: "minus",
            color: "red"
          }}
        />
      </div>
    );
  }
}

export default App;
