import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
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
        <div className="results">
          {results.length > 0 && (
            <InfiniteScroll
              dataLength={results.length}
              next={getCurrentPageOfResults()}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              <div className="list-group">
                {results.map(result => (
                  <div key={result.doi} className="card" style="width: 18rem;">
                    <img
                      className="card-img-top"
                      src={result.image.image_url}
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">{result.title}</h5>
                      <p className="card-text">{result.abstract}</p>
                      <a href={result.oa_url} className="btn btn-primary">
                        View Article
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          )}
        </div>
      </Fragment>
    );
  }
}

export default SearchResults;
