import React from "react";

import SearchResult from "./SearchResult";

class SearchResults extends React.Component {
  onButtonClick(name, info, version) {
    const newItem = { [name]: { info, version } };
    const curr = JSON.parse(localStorage.getItem("savedItems"));
    localStorage.setItem("savedItems", JSON.stringify({ ...curr, ...newItem }));
  }

  renderResults() {
    if (!this.props.results) {
      return null;
    }
    return this.props.results.map(result => {
      return (
        <SearchResult
          name={result.name}
          info={result.info}
          version={result.version}
          onButtonClick={this.onButtonClick}
          key={result.name}
        />
      );
    });
  }

  render() {
    return <div className="ui divided items">{this.renderResults()}</div>;
  }
}

export default SearchResults;
