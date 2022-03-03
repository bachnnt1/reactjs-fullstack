import React, { Component } from "react";
import { connect } from "react-redux";
import "./DetailSpecialty.scss";
import HomeHeader from "../../HomePage/HomeHeader";
class DetailSpecialty extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}
  async componentDidMount() {}
  render() {
    return (
      <>
        <HomeHeader />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { resVerifyEmail: state.admin.resVerifyEmail };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
