import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfor.scss";
import { FormattedMessage } from "react-intl";
import { languages } from "../../../utils";
class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetail: false,
      dataExtraInfo: {},
    };
  }
  doShowDetai = () => {
    this.setState({ isShowDetail: !this.state.isShowDetail });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.dataExtrInfo !== this.props.dataExtrInfo) {
      this.setState({ dataExtraInfo: this.props.dataExtrInfo });
    }
  }

  render() {
    let { isShowDetail, dataExtraInfo } = this.state;
    let { lang } = this.props;
    return (
      <div className="extra-container">
        <div className="up">
          <p className="title-weight">
            <FormattedMessage id="user.addressExam" />{" "}
          </p>
          <b>{dataExtraInfo && dataExtraInfo.addressClinic}</b>
          <p>
            {" "}
            <FormattedMessage id="user.priceExam" />{" "}
            <span>
              {lang === languages.VI
                ? dataExtraInfo &&
                  dataExtraInfo.priceTypeData &&
                  dataExtraInfo.priceTypeData.valueVi
                : dataExtraInfo &&
                  dataExtraInfo.priceTypeData &&
                  dataExtraInfo.priceTypeData.valueEn}{" "}
              {lang === languages.VI ? "vnđ" : "$"}
            </span>{" "}
            <span className="see-more" onClick={this.doShowDetai}>
              {" "}
              {isShowDetail ? (
                <FormattedMessage id="common.hidden" />
              ) : (
                <FormattedMessage id="common.seeMore" />
              )}
            </span>
          </p>
        </div>
        {isShowDetail && (
          <div className="down">
            <span>
              <FormattedMessage id="user.priceExam" /> :{" "}
              <span>
                {lang === languages.VI
                  ? dataExtraInfo &&
                    dataExtraInfo.priceTypeData &&
                    dataExtraInfo.priceTypeData.valueVi
                  : dataExtraInfo &&
                    dataExtraInfo.priceTypeData &&
                    dataExtraInfo.priceTypeData.valueEn}{" "}
                {lang === languages.VI ? "vnđ" : "$"}
              </span>
            </span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
