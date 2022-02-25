import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Select from "react-select";
import DatePicker from "../../../components/Input/DatePicker";
import {
  getAllDoctorAction,
  getAllCodeTime,
} from "../../../store/actions/adminActions";
import { languages } from "../../../utils";
import "./ManageSchedule.scss";
class ManageSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOptionDoctors: [],
      selectedDoctor: {},
      currentDate: "",
      rangeTime: [],
    };
  }
  componentDidMount() {
    this.props.getAllDoctorAction();
    this.props.getAllCodeTime();
  }
  buildOptionsDoctor = () => {
    let options = [];
    this.props.allDoctors.forEach((item, index) => {
      let labelVi = `${item.firstName} ${item.lastName}`;
      let labelEn = `${item.lastName} ${item.firstName}`;
      options.push({
        label: this.props.language === languages.VI ? labelVi : labelEn,
        value: item.id,
      });
    });
    return options;
  };
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.allDoctors !== this.props.allDoctors) {
      let options = this.buildOptionsDoctor();
      this.setState({
        listOptionDoctors: options,
      });
    }
    if (prevProps.language !== this.props.language) {
      let options = this.buildOptionsDoctor();
      this.setState({
        listOptionDoctors: options,
      });
    }
    if (prevProps.schedule !== this.props.schedule) {
      this.setState({
        rangeTime: this.props.schedule,
      });
    }
  }
  handleChange = async (event) => {
    this.setState({
      selectedDoctor: event,
    });
  };
  handleOnChangeDate = (date) => {
    this.setState({
      currentDate: date[0],
    });
  };
  render() {
    let { listOptionDoctors, selectedDoctor, rangeTime } = this.state;
    console.log(rangeTime);
    return (
      <>
        <div className="manage-container">
          <div className="title">
            <FormattedMessage id="manage-schedule.title" />
          </div>
          <div className="input-container">
            <div className="input">
              <label>Chọn bác sĩ</label>
              <Select
                className="select"
                value={selectedDoctor}
                onChange={(event) => this.handleChange(event)}
                options={listOptionDoctors}
                placeholder="Chọn bác sĩ"
              />
            </div>
            <div className="input">
              <label>Chọn ngày</label>
              <DatePicker
                onChange={this.handleOnChangeDate}
                value={this.state.currentDate[0]}
                minDate={new Date()}
              ></DatePicker>
            </div>
          </div>
          <div className="detail">
            <div class="range-time">
              {rangeTime &&
                rangeTime.data &&
                rangeTime.data.map((item, index) => {
                  return (
                    <button type="button">
                      {this.props.lang === languages.VI
                        ? item.valueVi
                        : item.valueEn}
                    </button>
                  );
                })}
            </div>
          </div>
          <div className="submit-button">
            <button type="button">Lưu thông tin</button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    systemMenuPath: state.app.systemMenuPath,
    allDoctors: state.admin.allDoctors,
    isLoggedIn: state.user.isLoggedIn,
    schedule: state.admin.schedule,
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDoctorAction: () => dispatch(getAllDoctorAction()),
    getAllCodeTime: () => dispatch(getAllCodeTime()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
