import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../../HomePage/HomeHeader";
import "./DetailDoctor.scss";
import { getDEtailDoctorById } from "../../../store/actions/adminActions";
import { languages } from "../../../utils";
class DetailDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailDoctor: {},
    };
  }
  componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      this.props.getDetailDoctorById(this.props.match.params.id);
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.detailDoctor !== this.props.detailDoctor) {
      if (
        this.props.detailDoctor &&
        this.props.detailDoctor.response &&
        this.props.detailDoctor.response.data
      ) {
        this.setState({ detailDoctor: this.props.detailDoctor.response.data });
      }
    }
  }
  render() {
    let { detailDoctor } = this.state;
    let { lang } = this.props;
    console.log(detailDoctor);
    let name = "";
    if (detailDoctor && detailDoctor.positionData) {
      name =
        lang === languages.VI
          ? `${detailDoctor.positionData.valueVi} ${detailDoctor.firstName} ${detailDoctor.lastName}`
          : `${detailDoctor.positionData.valueEn} ${detailDoctor.lastName} ${detailDoctor.firstName}`;
    }
    return (
      <>
        <div>
          <HomeHeader isShowBanner={false} />
        </div>
        <div className="doctor-detail-container">
          <div className="intro-doctor">
            <div className="content-boundary">
              <div
                className="content-left"
                style={{ backgroundImage: `url(${detailDoctor.image})` }}
              ></div>
            </div>
            <div className="content-right">
              <p>{name}</p>
              {detailDoctor &&
                detailDoctor.Markdown &&
                detailDoctor.Markdown.description && (
                  <p>{detailDoctor.Markdown.description}</p>
                )}
            </div>
          </div>
          <div className="schedule-doctor"></div>
          <div className="detail-info">
            {detailDoctor &&
              detailDoctor.Markdown &&
              detailDoctor.Markdown.contentHTML && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: detailDoctor.Markdown.contentHTML,
                  }}
                />
              )}
          </div>
          <div className="comment-doctor"></div>
        </div>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
