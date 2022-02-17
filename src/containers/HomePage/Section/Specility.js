import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specility.scss";

class Specility extends Component {
  render() {
    return <div className="section-specialty">Hello from Specility</div>;
  }
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Specility);
