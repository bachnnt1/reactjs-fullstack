import { Component } from "react";
import { connect } from "react-redux";
import "./medicalFacility.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
class MedicalFacility extends Component {
  render() {
    return (
      <div className="section-specialty">
        <div className="special-content">
          <div className="special-header">
            <span>Cơ sở y tế nổi bật</span>
            <button>Tìm kiếm</button>
          </div>
          <div className="body">
            <Slider {...this.props.settings}>
              <div className="img-customize">
                <div className="bg-image bg-image-facility" />
                <div>Bệnh viện hữu nghị Việt Đức</div>
              </div>
              <div className="img-customize">
                <div className="bg-image bg-image-facility" />
                <div>Bệnh viện Chợ Rẫy</div>
              </div>
              <div className="img-customize">
                <div className="bg-image bg-image-facility" />
                <div>Phòng khám Bệnh viện đại học y dược 1</div>
              </div>
              <div className="img-customize">
                <div className="bg-image bg-image-facility" />
                <div>Bệnh viện K - cơ sở Phan Chu Trinh</div>
              </div>
              <div className="img-customize">
                <div className="bg-image bg-image-facility" />
                <div>Bệnh viện Ung bướu Hưng Việt</div>
              </div>
              <div className="img-customize">
                <div className="bg-image bg-image-facility" />
                <div>Hệ thống y tế Thu Cúc</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
