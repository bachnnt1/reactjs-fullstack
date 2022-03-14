import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./TopDoctor.scss";
import { FormattedMessage } from "react-intl";
class TopDoctor extends Component {
  render() {
    return (
      <div className="section-specialty hightlight">
        <div className="special-content">
          <div className="special-header">
            <span>
              <FormattedMessage id="homeContent.topDoctor" />
            </span>
            <button>
              <FormattedMessage id="common.find" />
            </button>
          </div>
          <div className="body">
            <Slider {...this.props.settings}>
              <div className="img-customize-doctor">
                <div className="bg-image bg-image-doctor" />
                <div>Bác sĩ Chuyên khoa II Trần Minh Khuyên</div>
              </div>
              <div className="img-customize-doctor">
                <div className="bg-image bg-image-doctor" />
                <div>Bác sĩ chuyên khoa II Trần Thị Hoài Hương</div>
              </div>
              <div className="img-customize-doctor">
                <div className="bg-image bg-image-doctor" />
                <div>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng</div>
              </div>
              <div className="img-customize-doctor">
                <div className="bg-image bg-image-doctor" />
                <div>PGS, TS, Giảng viên cao cấp Trần Hữu Bình</div>
              </div>
              <div className="img-customize-doctor">
                <div className="bg-image bg-image-doctor" />
                <div>Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội</div>
              </div>
              <div className="img-customize-doctor">
                <div className="bg-image bg-image-doctor" />
                <div>Giáo sư, Tiến sĩ Trần Ngọc Ân</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(TopDoctor);
