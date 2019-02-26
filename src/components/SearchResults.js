import React from "react";

class SearchResults extends React.Component {
  renderHeader() {
    if (this.props.results.length > 0) {
      return <div className="ui center aligned header">Search Results</div>;
    }
  }

  renderResults() {
    return this.props.results.map(result => {
      return <div className="result">{result.name}</div>;
    });
  }

  render() {
    return (
      <div className="searchResults">
        {this.renderHeader()}
        <div className="resultsList">{this.renderResults()}</div>
      </div>
    );
  }
}

export default SearchResults;
