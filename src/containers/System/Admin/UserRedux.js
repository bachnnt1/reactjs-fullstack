import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserRedux.scss";
import { languages } from "../../../utils";
import { FormattedMessage } from "react-intl";
import {
  getGender,
  getPositions,
  getRoles,
} from "../../../store/actions/adminActions";
class UserRedux extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { arrGender: [], arrPosition: [], arrRole: [] };
  }

  async componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genders !== this.props.genders) {
      this.setState({
        arrGender: this.props.genders,
      });
    }
    if (prevProps.positions !== this.props.positions) {
      this.setState({
        arrPosition: this.props.positions,
      });
    }
    if (prevProps.roles !== this.props.roles) {
      this.setState({
        arrRole: this.props.roles,
      });
    }
  }
  getGenders = () => {
    this.props.getGender();
  };
  getPositions = () => {
    this.props.getPositions();
  };
  getRoles = () => {
    this.props.getRole();
  };

  render() {
    let { arrGender, arrPosition, arrRole } = this.state;
    let lang = this.props.language;
    return (
      <div className="text-center">
        <div className="row-input">
          <div className="input">
            <label>
              <FormattedMessage id="user.email" />
            </label>
            <input type="email" name="email" />
          </div>
          <div className="input">
            <FormattedMessage id="user.password" />
            <input type="password" name="password" />
          </div>
        </div>
        <div className="row-input">
          <div className="input">
            <label>
              <FormattedMessage id="user.firstName" />
            </label>
            <input type="text" name="firstname" />
          </div>
          <div className="input">
            <label>
              <FormattedMessage id="user.lastName" />
            </label>
            <input type="text" name="lastname" />
          </div>
        </div>
        <div className="row-input">
          <div className="input">
            <label>
              <FormattedMessage id="user.address" />
            </label>
            <input type="text" name="address" />
          </div>
          <div className="input">
            <label>
              <FormattedMessage id="user.phoneNumber" />
            </label>
            <input type="text" name="phoneNumber" />
          </div>
        </div>

        <div className="row-input">
          <div className="input">
            <label>
              <FormattedMessage id="user.gender" />
            </label>
            <select id="inputState" onClick={() => this.getGenders()}>
              {arrGender &&
                arrGender.data &&
                arrGender.data.length &&
                arrGender.data.map((item, index) => {
                  return (
                    <option key={index}>
                      {lang === languages.VI ? item.valueVi : item.valueEn}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="input">
            <label>
              <FormattedMessage id="user.position" />
            </label>
            <select id="inputState2" onClick={() => this.getPositions()}>
              {arrPosition &&
                arrPosition.data &&
                arrPosition.data.length &&
                arrPosition.data.map((item, index) => {
                  return (
                    <option key={index}>
                      {lang === languages.VI ? item.valueVi : item.valueEn}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="row-input">
          <div className="input">
            <label>
              <FormattedMessage id="user.role" />
            </label>
            <select
              id="inputState3"
              name="roleid"
              onClick={() => this.getRoles()}
            >
              {arrRole &&
                arrRole.data &&
                arrRole.data.length &&
                arrRole.data.map((item, index) => {
                  return (
                    <option key={index}>
                      {lang === languages.VI ? item.valueVi : item.valueEn}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="input">
            <label>
              <FormattedMessage id="user.image" />
            </label>
            <input type="text" name="image" />
          </div>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genders: state.admin.genders,
    positions: state.admin.position,
    roles: state.admin.role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGender: () => dispatch(getGender()),
    getPositions: () => dispatch(getPositions()),
    getRole: () => dispatch(getRoles()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
