import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";

class HomeHeader extends Component {
  render() {
    return (
      <>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left">
              <i class="fas fa-bars"></i>
              <div className="header-logo"></div>
            </div>
            <div className="center">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeHeader.speciality" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeHeader.findSpeciality" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeHeader.baseMedi" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeHeader.findHos" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeHeader.doctor" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeHeader.findDoc" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeHeader.package" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeHeader.totalDos" />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="support">
                <i class="fas fa-ambulance"></i>{" "}
                <FormattedMessage id="homeHeader.support" />
              </div>
              <div className="flag">VN</div>
              <div className="flag">EN</div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div className="content-up">
            <div className="title1">
              <FormattedMessage id="homeHeader.baseMedial" />
            </div>
            <div className="title2">
              <FormattedMessage id="homeHeader.totalCare" />
            </div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Tìm chuyên khoa"></input>
            </div>
          </div>
          <div className="content-down">
            <div className="option">
              <div className="option-child">
                <div className="icon-child">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="homeHeader.examSpe" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="homeHeader.remoteExam" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-procedures"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="homeHeader.totalExam" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fab fa-accessible-icon"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="homeHeader.medicalTest" />
                </div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i className="fas fa-user-md"></i>
                </div>
                <div className="text-child"><FormattedMessage id="homeHeader.spiritHealth" /></div>
              </div>
              <div className="option-child">
                <div className="icon-child">
                  <i class="fas fa-ambulance"></i>
                </div>
                <div className="text-child"><FormattedMessage id="homeHeader.dentistExam" /></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
