import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserRedux.scss";
class UserRedux extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="text-center">
        <div className="row-input">
          <div className="input">
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div className="input">
            <label>Password</label>
            <input type="password" name="password" />
          </div>
        </div>
        <div className="row-input">
          <div className="input">
            <label>first name</label>
            <input type="text" name="firstname" />
          </div>
          <div className="input">
            <label>last name</label>
            <input type="text" name="lastname" />
          </div>
        </div>
        <div className="row-input">
          <div className="input">
            <label>Address</label>
            <input type="text" name="address" />
          </div>
          <div className="input">
            <label>Phone number</label>
            <input type="text" name="phonenumber" />
          </div>
        </div>

        <div className="row-input">
          <div className="input">
            <label>Gender</label>
            <select id="inputState">
              <option value="1">Men</option>
              <option value="0">Female</option>
            </select>
          </div>
          <div className="input">
            <label>Position</label>
            <select id="inputState2">
              <option value="1">Men</option>
              <option value="0">Female</option>
            </select>
          </div>
        </div>
        <div className="row-input">
          <div className="input">
            <label>RoleId</label>
            <select id="inputState1" name="roleid">
              <option value="1">Admin</option>
              <option value="2">Doctor</option>
              <option value="3">Patient</option>
            </select>
          </div>
          <div className="input">
            <label>Image</label>
            <input type="text" name="image" />
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
