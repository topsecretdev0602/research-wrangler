import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPubmark } from "../../actions/pubmarks";

class SearchResult extends Component {
  static propTypes = {
    result: PropTypes.object
  };

  onPubmarkClick = result => {
    const title = result.title == undefined ? " " : result.title;
    const abstract =
      result.abstract.text == undefined ? " " : result.abstract.text;
    const authors =
      result.author_lastnames == undefined
        ? " "
        : result.author_lastnames.join(",");
    const url = result.oa_url == undefined ? " " : result.oa_url;
    const keywords = result.topics == undefined ? " " : result.topics.join(",");
    const pubmark = {
      title: title,
      abstract: abstract,
      authors: authors,
      url: url,
      keywords: keywords
    };

    this.props.addPubmark(pubmark);
  };

  render() {
    const { result } = this.props;
    const imageStyle = {
      width: "100px",
      height: "100px"
    };
    return (
      <div className="container">
        <img
          className="img-thumbnail float-left"
          style={imageStyle}
          src={result.image.image_url}
          alt=""
        />
        <a
          onClick={() => this.onPubmarkClick(result)}
          className="float-right btn btn-primary"
        >
          Add Pubmark
        </a>
        <div>
          <h5>{result.title}</h5>
          <p>{"p" + result.abstract.text + "p"}</p>
          <a href={result.oa_url} className="btn btn-primary">
            View Article
          </a>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addPubmark }
)(SearchResult);
