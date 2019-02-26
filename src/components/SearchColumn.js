import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import List from "./List";

class SearchColumn extends React.Component {
  state = { items: [] };

  onSearch = async searchTerm => {
    const res = await axios(
      `http://localhost:3000/api/v1/search.json?query=${searchTerm}`
    );
    if (res.status !== 200) {
      console.error("There was an error with the rubygem search");
      return;
    }
    this.setState({ items: res.data });
  };

  render() {
    return (
      <div className="column">
        <SearchBar onSearch={this.onSearch} />
        <List items={this.state.items} buttonType={this.props.buttonType} />
      </div>
    );
  }
}

export default SearchColumn;
