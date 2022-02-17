import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specility.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Specility extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="section-specialty">
        <Slider {...settings}>
          <div className="img-customize">
            <h3>1</h3>
          </div>
          <div className="img-customize">
            <h3>2</h3>
          </div>
          <div className="img-customize">
            <h3>3</h3>
          </div>
          <div className="img-customize">
            <h3>4</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Specility);
