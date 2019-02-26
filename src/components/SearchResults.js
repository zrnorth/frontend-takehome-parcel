import React from "react";

import SearchResult from "./SearchResult";

class SearchResults extends React.Component {
  onButtonClick(name, info, version) {
    // Save the selected gem into localstorage here
  }

  renderResults() {
    return this.props.results.map(result => {
      return (
        <SearchResult
          name={result.name}
          info={result.info}
          version={result.version}
          onButtonClick={this.onButtonClick}
        />
      );
    });
  }

  render() {
    return <div className="ui divided items">{this.renderResults()}</div>;
  }
}

export default SearchResults;
