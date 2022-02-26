import moment from "moment";
import React, { Component } from "react";
import { connect } from "react-redux";
import { languages } from "../../../utils";
import { getScheduleByDoctorId } from "../../../store/actions";
import "./DoctorSchedule.scss";
class DoctorSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allDays: [],
    };
  }
  async componentDidMount() {
    let { lang } = this.props;
    let arrDate = [];
    for (let i = 0; i < 7; i++) {
      let obj = {};
      if (lang === languages.VI) {
        obj.label = moment(new Date()).add(i, "days").format("dddd - DD/MM");
      } else {
        obj.label = moment(new Date())
          .add(i, "days")
          .locale("en")
          .format("ddd - DD/MM");
      }

      obj.value = moment(new Date()).add(i, "days").startOf("day").valueOf();
      arrDate.push(obj);
    }

    this.setState({
      allDays: arrDate,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.lang !== this.props.lang) {
      let arrDate = [];
      for (let i = 0; i < 7; i++) {
        let obj = {};
        if (this.props.lang === languages.VI) {
          obj.label = moment(new Date()).add(i, "days").format("dddd - DD/MM");
        } else {
          obj.label = moment(new Date())
            .add(i, "days")
            .locale("en")
            .format("ddd - DD/MM");
        }

        obj.value = moment(new Date()).add(i, "days").startOf("day").valueOf();
        arrDate.push(obj);
      }

      this.setState({
        allDays: arrDate,
      });
    }
  }
  handleChangeDate = async (event) => {
    await this.props.getScheduleByDoctorId(
      this.props.doctorIdFromParent,
      event.target.value
    );
  };
  render() {
    let { allDays } = this.state;
    return (
      <>
        <div className="doctor-schedule-container">
          <div className="all-schedule">
            <select onChange={(event) => this.handleChangeDate(event)}>
              {allDays &&
                allDays.length > 0 &&
                allDays.map((item, index) => {
                  return (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="available-time"></div>
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
  return {
    getScheduleByDoctorId: (id, date) =>
      dispatch(getScheduleByDoctorId(id, date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
