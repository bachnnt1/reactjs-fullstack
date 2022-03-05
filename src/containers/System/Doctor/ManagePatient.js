import React, { Component } from "react";
import { connect } from "react-redux";
import "./ManagePatient.scss";
import DatePicker from "../../../components/Input/DatePicker";
class managePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: "",
    };
  }
  async componentDidMount() {}
  handleOnChangeDate = (date) => {
    this.setState({
      currentDate: date[0],
    });
  };
  componentDidUpdate(prevProps, prevState, snapshot) {}
  render() {
    return (
      <>
        <div className="manage-container">
          <div className="title">Quản lý bệnh nhân</div>
          <div className="input">
            <label>Chọn ngày</label>
            <DatePicker
              onChange={this.handleOnChangeDate}
              value={this.state.currentDate}
              minDate={new Date()}
            ></DatePicker>
          </div>
        </div>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(managePatient);
