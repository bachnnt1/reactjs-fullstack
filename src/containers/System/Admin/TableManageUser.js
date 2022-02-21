import React, { Component } from "react";
import { connect } from "react-redux";
import "./TableManageUser.scss";
import {
  fetchAllUsers,
  deleteUserRedux,
} from "../../../store/actions/adminActions";
class TableManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRedux: [],
    };
  }

  async componentDidMount() {
    this.props.fetchAllUsers();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.users !== this.props.users) {
      this.setState({ userRedux: this.props.users });
    }
  }

  deleteUser = (userId) => {
    this.props.deleteUserRedux(userId);
  };
  render() {
    let { userRedux } = this.state;
    return (
      <div className="user-container">
        <div className="user-table">
          <table>
            <tbody>
              <tr>
                <th>Email</th>
                <th>FullName</th>
                <th>Lastname</th>
                <th>address</th>
                <th>action</th>
              </tr>
              {userRedux &&
                userRedux.length > 0 &&
                userRedux.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button>Edit</button>
                        <button onClick={(userId) => this.deleteUser(item.id)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    deleteUserRedux: (userId) => dispatch(deleteUserRedux(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
