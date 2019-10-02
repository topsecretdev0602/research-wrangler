import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchResult from "./SearchResult";
import InfiniteScroll from "react-infinite-scroll-component";

/*
 * Displays the search results for the user query
 */
class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    getCurrentPageOfResults: PropTypes.func.isRequired,
    results: PropTypes.array
  };

  render() {
    const { results, getCurrentPageOfResults } = this.props;
    return (
      <Fragment>
        <h4 className="display-5 text-center">Results:</h4>
        <div>
          {results.length > 0 && (
            <InfiniteScroll
              dataLength={results.length}
              next={getCurrentPageOfResults}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              <div className="list-group">
                {results.map(result => (
                  <SearchResult key={result.doi} result={result} />
                ))}
              </div>
            </InfiniteScroll>
          )}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  results: state.search.results
});

export default connect(mapStateToProps)(SearchResults);
