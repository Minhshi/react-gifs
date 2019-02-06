import React from "react";

class SearchBar extends React.Component {
  handleChange = event => {
    this.props.searchFunction(event.target.value);
  };
  render() {
    return (
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
