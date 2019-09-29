import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { addPubmark } from "../../actions/pubmarks";
import { getSearchResults } from "../../actions/search";

class Search extends Component {
  static proptypes = {
    results: Proptypes.array.isRequired,
    getSearchResults: Proptypes.func.isRequired,
    addPubmark: Proptypes.func.isRequired
  };

  search = e => {};

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container card card-body border-0 mb-4 p-4">
        <h1 className="display-5 text-center">Search For Publications</h1>
        <br />
        <form onSubmit={this.search.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search..."
              name="Search"
              value=""
              onChange={this.onChange}
            />
          </div>
          <button
            className="btn btn-primary btn-lg btn-block mb-5"
            type="submit"
          >
            Search
          </button>
        </form>
        <h4 className="display-5 text-center">Results:</h4>
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
