import React from "react";

const SearchResults = props => {
  const { results } = props;

  let ret = "";
  for (const result of results) {
    ret += result;
  }
  return ret;
  // todo: for result in results: render the result
};

export default SearchResults;
