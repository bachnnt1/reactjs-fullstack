import React, { Component } from "react";
import { connect } from "react-redux";
import "./BookingModal.scss";
import { Modal } from "reactstrap";
class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenBookingModal: false,
      timeDetail: {},
    };
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.isOpenBookingModal !== this.props.isOpenBookingModal) {
      this.setState({
        isOpenBookingModal: this.props.isOpenBookingModal,
      });
    }
    if (prevProps.timeDetail !== this.props.timeDetail) {
      this.setState({
        timeDetail: this.props.timeDetail,
      });
    }
  }
  noRefCheck = () => {
    this.props.toogleFromParent();
  };
  render() {
    let { isOpenBookingModal, timeDetail } = this.state;
    return (
      <div>
        <Modal
          isOpen={isOpenBookingModal}
          toggle={this.noRefCheck}
          size="sm"
          centered
          className="boundary"
        >
          <div className="modal-booking-container">
            <p>Thông tin đặt lịch khám bệnh</p>
            <div className="parent">
              <div className="content">
                <label> Họ tên</label>
                <input type="text"></input>
              </div>
              <div className="content">
                <label> Số điện thoại</label>
                <input type="phone"></input>
              </div>
            </div>
            <div className="parent">
              <div className="content">
                <label> Địa chỉ email</label>
                <input type="text"></input>
              </div>
              <div className="content">
                <label> Địa chỉ liên hệ</label>
                <input type="phone"></input>
              </div>
            </div>
            <div className="parent">
              <div className="content-exam">
                <label> Lý do khám</label>
                <input type="text"></input>
              </div>
            </div>
            <div className="parent">
              <div className="content">
                <label> Đặt cho ai</label>
                <input type="text"></input>
              </div>
              <div className="content">
                <label> Giới tính</label>
                <input type="phone"></input>
              </div>
            </div>
            <div className="footer">
              <button className="accept">Xác nhận</button>
              <button onClick={this.noRefCheck}>Cancel</button>
            </div>
          </div>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
