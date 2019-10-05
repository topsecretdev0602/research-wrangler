import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPubmark, deletePubmark } from "../../actions/pubmarks";

class SearchResult extends Component {
  static propTypes = {
    result: PropTypes.object,
    addPubmark: PropTypes.func.isRequired,
    deletePubmark: PropTypes.func.isRequired
  };

  addPubmark = result => {
    const title = result.title == undefined ? " " : result.title;
    const abstract =
      result.abstract.text == undefined ? " " : result.abstract.text;
    const authors =
      result.author_lastnames == undefined
        ? " "
        : result.author_lastnames.join(", ");
    const doi = result.doi;
    const url = result.oa_url == undefined ? " " : result.oa_url;
    const keywords = result.topics == undefined ? " " : result.topics.join(",");
    const pubmark = {
      title: title,
      abstract: abstract,
      authors: authors,
      doi: doi,
      url: url,
      keywords: keywords
    };

    this.props.addPubmark(pubmark);
  };

  deletePubmarks = result => {
    const pubmark = this.props.pubmarks.find(
      pubmark => pubmark.doi === result.doi
    );
    this.props.deletePubmark(pubmark.id);
  };

  render() {
    const { result, pubmarks } = this.props;
    const havePubmark = pubmarks.some(pubmark => pubmark.doi === result.doi);
    return (
      <div className="container mb-4">
        {havePubmark ? (
          <a
            onClick={() => this.deletePubmark(result)}
            className="float-right btn btn-danger"
          >
            Delete Pubmark
          </a>
        ) : (
          <a
            onClick={() => this.addPubmark(result)}
            className="float-right btn btn-primary"
          >
            Add Pubmark
          </a>
        )}
        <div>
          <h5>
            <a href={result.oa_url}>{result.title}</a>
          </h5>
          <p>Authors: {result.author_lastnames.join(",")}</p>
          <p>Abstract: {result.abstract.text}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pubmarks: state.pubmarks.pubmarks
});

export default connect(
  mapStateToProps,
  { addPubmark, deletePubmark }
)(SearchResult);
