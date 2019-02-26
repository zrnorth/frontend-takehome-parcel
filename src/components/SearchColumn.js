import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

class SearchColumn extends React.Component {
  state = { results: [] };

  onSearch = async searchTerm => {
    console.log(searchTerm);
    // Create the ajax request and await it to return
    const res = await axios(
      `http://localhost:3000/api/v1/search.json?query=${searchTerm}`
    );
    if (res.status !== 200) {
      console.error("There was an error with the rubygem search");
      return;
    }
    this.setState({ results: res.data });
    // Update the search results to their new value
  };

  render() {
    return (
      <div className="column">
        <SearchBar onSearch={this.onSearch} />
        <div className="ui center aligned header">Search Results</div>
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default SearchColumn;
