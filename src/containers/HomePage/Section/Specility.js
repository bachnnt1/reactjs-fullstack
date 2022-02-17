import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specility.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialImg from "../../../assets/images/163921da-lieu-hn.jpg";
class Specility extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="section-specialty">
        <div className="special-content">
          <div className="special-header">
            <span>Chuyên khoa phổ biến</span>
            <button>Xem thêm</button>
          </div>
          <div className="body">
            <Slider {...settings}>
              <div className="img-customize">
                <div className="bg-image" />
                <div>Khoa 1</div>
              </div>
              <div className="img-customize">
                <div className="bg-image" />
                <div>Khoa 2</div>
              </div>
              <div className="img-customize">
                <div className="bg-image" />
                <div>Khoa 3</div>
              </div>
              <div className="img-customize">
                <div className="bg-image" />
                <div>Khoa 4</div>
              </div>
              <div className="img-customize">
                <div className="bg-image" />
                <div>Khoa 5</div>
              </div>
              <div className="img-customize">
                <div className="bg-image" />
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
