import React from "react";

class SearchBar extends React.Component {
  state = { searchText: "" };

  handleChange = event => {
    this.setState({ searchText: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.searchText);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="ui fluid icon input">
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.searchText}
            placeholder="Search for ruby gems..."
          />
          <i className="search icon" />
        </div>
      </form>
    );
  }
}

export default SearchBar;
