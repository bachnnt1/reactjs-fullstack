import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfor.scss";
import { FormattedMessage } from "react-intl";
import { languages } from "../../../utils";
import { getDEtailDoctorById } from "../../../store/actions/adminActions";
class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetail: false,
      dataExtraInfo: {},
    };
  }
  async componentDidMount() {
    await this.props.getDetailDoctorById(this.props.doctorIdFromParent);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.detailDoctor !== this.props.detailDoctor) {
      this.setState({ dataExtraInfo: this.props.detailDoctor.response });
    }
  }

  doShowDetai = () => {
    this.setState({ isShowDetail: !this.state.isShowDetail });
  };
  render() {
    let { isShowDetail, dataExtraInfo } = this.state;
    let { lang } = this.props;
    return (
      <div className="extra-container">
        <div className="up">
          <p className="title-weight">
            <FormattedMessage id="user.addressExam" />{" "}
          </p>
          <b>
            {dataExtraInfo &&
              dataExtraInfo.data &&
              dataExtraInfo.data.Doctor_info &&
              dataExtraInfo.data.Doctor_info.addressClinic}
          </b>
          <p>
            {" "}
            <FormattedMessage id="user.priceExam" />{" "}
            <span>
              {lang === languages.VI
                ? dataExtraInfo &&
                  dataExtraInfo.data &&
                  dataExtraInfo.data.Doctor_info &&
                  dataExtraInfo.data.Doctor_info.priceTypeData &&
                  dataExtraInfo.data.Doctor_info.priceTypeData.valueVi
                : dataExtraInfo &&
                  dataExtraInfo.data &&
                  dataExtraInfo.data.Doctor_info &&
                  dataExtraInfo.data.Doctor_info.priceTypeData &&
                  dataExtraInfo.data.Doctor_info.priceTypeData.valueEn}{" "}
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
                    dataExtraInfo.data &&
                    dataExtraInfo.data.Doctor_info &&
                    dataExtraInfo.data.Doctor_info.priceTypeData &&
                    dataExtraInfo.data.Doctor_info.priceTypeData.valueVi
                  : dataExtraInfo &&
                    dataExtraInfo.data &&
                    dataExtraInfo.data.Doctor_info &&
                    dataExtraInfo.data.Doctor_info.priceTypeData &&
                    dataExtraInfo.data.Doctor_info.priceTypeData.valueEn}{" "}
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
    detailDoctor: state.admin.detailDoctor,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailDoctorById: (id) => dispatch(getDEtailDoctorById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
