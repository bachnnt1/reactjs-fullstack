import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserRedux.scss";
import { languages } from "../../../utils";
import { FormattedMessage } from "react-intl";
import {
  getGender,
  getPositions,
  getRoles,
  createNewUserRedux,
} from "../../../store/actions/adminActions";
class UserRedux extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      arrGender: [],
      arrPosition: [],
      arrRole: [],
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      gender: "",
      position: "",
      role: "",
      avatar: "",
    };
  }

  async componentDidMount() {
    this.props.getGender();
    this.props.getPositions();
    this.props.getRole();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genders !== this.props.genders) {
      let genderRedux = this.props.genders;
      this.setState({
        arrGender: genderRedux,
        gender:
          genderRedux && genderRedux.data.length > 0
            ? genderRedux.data[0].key
            : "",
      });
    }
    if (prevProps.positions !== this.props.positions) {
      this.setState({
        arrPosition: this.props.positions,
        position:
          this.props.positions.data && this.props.positions.data.length > 0
            ? this.props.positions.data[0].key
            : "",
      });
    }
    if (prevProps.roles !== this.props.roles) {
      this.setState({
        arrRole: this.props.roles,
        role:
          this.props.roles.data && this.props.roles.data.length > 0
            ? this.props.roles.data[0].key
            : "",
      });
    }
  }
  handleChangeImage = (event) => {
    let data = event.target.files;
    let file = data[0];
  };
  onChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({ ...copyState });
  };
  handleSave = () => {
    this.props.createNewUser({
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
      gender: this.state.gender,
      roleId: this.state.role,
      phoneNumber: this.state.phoneNumber,
      position: this.state.position,
    });
  };
  render() {
    let {
      arrGender,
      arrPosition,
      arrRole,
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
      gender,
      position,
      role,
      avatar,
    } = this.state;
    let lang = this.props.language;
    return (
      <div className="text-center">
        <div className="row-input">
          <div className="input">
            <label>
              <FormattedMessage id="user.email" />
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => this.onChangeInput(event, "email")}
            />
          </div>
          <div className="input">
            <FormattedMessage id="user.password" />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => this.onChangeInput(event, "password")}
            />
          </div>
        </div>
        <div className="row-input">
          <div className="input">
            <label>
              <FormattedMessage id="user.firstName" />
            </label>
            <input
              type="text"
              name="firstname"
              value={firstName}
              onChange={(event) => this.onChangeInput(event, "firstName")}
            />
          </div>
          <div className="input">
            <label>
              <FormattedMessage id="user.lastName" />
            </label>
            <input
              type="text"
              name="lastname"
              value={lastName}
              onChange={(event) => this.onChangeInput(event, "lastName")}
            />
          </div>
        </div>
        <div className="row-input">
          <div className="input">
            <label>
              <FormattedMessage id="user.address" />
            </label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(event) => this.onChangeInput(event, "address")}
            />
          </div>
          <div className="input">
            <label>
              <FormattedMessage id="user.phoneNumber" />
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(event) => this.onChangeInput(event, "phoneNumber")}
            />
          </div>
        </div>

        <div className="row-input">
          <div className="input">
            <label>
              <FormattedMessage id="user.gender" />
            </label>
            <select
              id="inputState"
              onChange={(event) => this.onChangeInput(event, "gender")}
            >
              {arrGender &&
                arrGender.data &&
                arrGender.data.length &&
                arrGender.data.map((item, index) => {
                  return (
                    <option key={index} value={item.key}>
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
            <select
              id="inputState2"
              onChange={(event) => this.onChangeInput(event, "position")}
            >
              {arrPosition &&
                arrPosition.data &&
                arrPosition.data.length &&
                arrPosition.data.map((item, index) => {
                  return (
                    <option key={index} value={item.key}>
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
              onChange={(event) => this.onChangeInput(event, "role")}
            >
              {arrRole &&
                arrRole.data &&
                arrRole.data.length &&
                arrRole.data.map((item, index) => {
                  return (
                    <option key={index} value={item.key}>
                      {lang === languages.VI ? item.valueVi : item.valueEn}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="input avatar">
            <label htmlFor="image">
              <FormattedMessage id="user.image" />
            </label>
            <input
              type="file"
              id="image"
              hidden
              onChange={(event) => {
                this.handleChangeImage(event);
              }}
            />
          </div>
        </div>
        <div>
          <button type="submit" onClick={() => this.handleSave()}>
            Lưu user
          </button>
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
    createNewUser: (data) => dispatch(createNewUserRedux(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
