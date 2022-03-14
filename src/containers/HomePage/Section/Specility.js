import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FormattedMessage } from "react-intl";
class Specility extends Component {
  render() {
    return (
      <div className="section-specialty hightlight">
        <div className="special-content">
          <div className="special-header">
            <span>
              <FormattedMessage id="homeContent.popularSpecialties" />
            </span>
            <button>
              <FormattedMessage id="common.seeMore" />
            </button>
          </div>
          <div className="body">
            <Slider {...this.props.settings}>
              <div className="img-customize">
                <div className="bg-image bg-image-speciality" />
                <div>Khoa 1</div>
              </div>
              <div className="img-customize">
                <div className="bg-image bg-image-speciality" />
                <div>Khoa 2</div>
              </div>
              <div className="img-customize">
                <div className="bg-image bg-image-speciality" />
                <div>Khoa 3</div>
              </div>
              <div className="img-customize">
                <div className="bg-image bg-image-speciality" />
                <div>Khoa 4</div>
              </div>
              <div className="img-customize">
                <div className="bg-image bg-image-speciality" />
                <div>Khoa 5</div>
              </div>
              <div className="img-customize">
                <div className="bg-image bg-image-speciality" />
                <div>Khoa 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specility);
