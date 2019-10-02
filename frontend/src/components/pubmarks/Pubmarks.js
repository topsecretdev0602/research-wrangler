import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { getPubmarks, deletePubmark } from "../../actions/pubmarks";

export class Pubmarks extends Component {
  static proptypes = {
    pubmarks: Proptypes.array.isRequired,
    getPubmarks: Proptypes.func.isRequired,
    deletePubmark: Proptypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPubmarks();
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <h2 className="my-5">Pubmarks</h2>
          {this.props.pubmarks.map(pubmark => (
            <div key={pubmark.id} className="card">
              <div className="card-header bg-primary">
                <a
                  href={pubmark.url}
                  target="_blank"
                  className="card-link text-white"
                >
                  {pubmark.title}
                </a>
                <div className="icons float-lg-right float-md-right">
                  <a onClick={this.props.deletePubmark.bind(this, pubmark.id)}>
                    <i className="fa fa-times fa-1x text-white" />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">{pubmark.abstract}</p>
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
