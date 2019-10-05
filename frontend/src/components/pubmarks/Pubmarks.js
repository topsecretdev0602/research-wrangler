import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPubmarks, deletePubmark } from "../../actions/pubmarks";

export class Pubmarks extends Component {
  static proptypes = {
    pubmarks: PropTypes.array.isRequired,
    getPubmarks: PropTypes.func.isRequired,
    deletePubmark: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPubmarks();
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <h2 className="mb-5">Pubmarks</h2>
          {this.props.pubmarks.map(pubmark => (
            <div key={pubmark.id} className="container mb-4">
              <a
                onClick={() => this.props.deletePubmark.bind(this, pubmark.doi)}
                className="float-right btn btn-primary"
              >
                Delete Pubmark
              </a>
              <div>
                <h5>
                  <a href={pubmark.oa_url}>{pubmark.title}</a>
                </h5>
                <p>Authors: {pubmark.author_lastnames.join(",")}</p>
                <p>Abstract: {pubmark.abstract.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  pubmarks: state.pubmarks.pubmarks
});

export default connect(
  mapStateToProps,
  { getPubmarks, deletePubmark }
)(Pubmarks);
