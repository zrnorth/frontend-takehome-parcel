import React from "react";

import SearchResult from "./SearchResult";

class SearchResults extends React.Component {
  renderResults() {
    return this.props.results.map(result => {
      return (
        <SearchResult
          name={result.name}
          info={result.info}
          version={result.version}
        />
      );
    });
  }

  render() {
    return <div className="ui divided items">{this.renderResults()}</div>;
  }
}

export default SearchResults;
