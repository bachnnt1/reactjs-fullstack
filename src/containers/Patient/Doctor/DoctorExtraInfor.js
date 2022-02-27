import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorExtraInfor.scss";
class DoctorExtraInfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDetail: false,
    };
  }
  doShowDetai = () => {
    this.setState({ isShowDetail: !this.state.isShowDetail });
  };
  render() {
    let { isShowDetail } = this.state;
    return (
      <div className="extra-container">
        <div className="up">
          <p className="title-weight">ĐỊA CHỈ KHÁM </p>
          <b>
            Phòng khám Da liễu Táo Đỏ 30/1A Ngô Thời Nhiệm, Phường 7, Quận 3,
            Thành phố Hồ Chí Minh
          </b>
          <p>
            {" "}
            GIÁ KHÁM <span>250.000đ</span>{" "}
            <span className="see-more" onClick={this.doShowDetai}>
              {" "}
              {isShowDetail ? "Ẩn chi tiết" : "Xem chi tiết "}
            </span>
          </p>
        </div>
        {isShowDetail && (
          <div className="down">
            <span>Giá khám: 250.000 vnđ</span>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorExtraInfor);
