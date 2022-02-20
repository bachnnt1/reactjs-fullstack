import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserRedux.scss";
import { languages } from "../../../utils";
import { FormattedMessage } from "react-intl";
import { getGender } from "../../../store/actions/adminActions";
class UserRedux extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { arrGender: [] };
  }

  async componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.genders !== this.props.genders) {
      this.setState({
        arrGender: this.props.genders,
      });
    }
  }
  getGenders = () => {
    this.props.getGender();
    console.log(this.props.genders);
  };
  render() {
    let { arrGender } = this.state;
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
            <select id="inputState2">
              <option value="1">Men</option>
              <option value="0">Female</option>
            </select>
          </div>
        </div>
        <div className="row-input">
          <div className="input">
            <label>
              <FormattedMessage id="user.role" />
            </label>
            <select id="inputState1" name="roleid">
              <option value="1">Admin</option>
              <option value="2">Doctor</option>
              <option value="3">Patient</option>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGender: () => dispatch(getGender()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
