import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { addPubmark } from "../../actions/pubmarks";
import { getSearchResults } from "../../actions/search";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

class Search extends Component {
  static proptypes = {
    results: Proptypes.array.isRequired,
    getSearchResults: Proptypes.func.isRequired,
    addPubmark: Proptypes.func.isRequired
  };

  state = {
    results: [],
    query: "",
    page: 0
  };

  getCurrentPageOfResults = () => {
    // increment page on each call to
    this.setState({ page: this.state.page + 1 });
    this.props.getSearchResults(this.state.query, this.state.page + 1);
  };

  onInputChange = e => {
    this.setState({ query: e.target.value });
  };

  onSearchSubmit = e => {
    // reset page on new search
    this.setState({ page: 0 });
    this.getCurrentPageOfResults();
  };

  render() {
    return (
      <div className="container">
        <SearchInput
          onInputChange={this.onInputChange}
          onSearchSubmit={this.onSearchSubmit}
        />
        {this.props.results.length > 0 && (
          <SearchResults
            getCurrentPageOfResults={this.getCurrentPageOfResults}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.search.results
});

export default connect(
  mapStateToProps,
  { getSearchResults, addPubmark }
)(Search);
