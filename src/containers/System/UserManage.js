import React, { Component } from "react";
import { connect } from "react-redux";
import "./userManage.scss";
import { getAllUsers } from "../../services/userService";
import ModalUser from "./ModalUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      arrUser: [],
    };
  }

  async componentDidMount() {
    let response = await getAllUsers("ALL");
    this.setState(
      {
        arrUser: response.user,
      },
      () => {}
    );
  }
  handleAddNewUser = () => {
    this.setState({
      isOpenModal: true,
    });
  };

  toogleUserModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };
  render() {
    let arrUser = this.state.arrUser;
    return (
      <div className="user-container">
        <div className="title text-center">Cố lên Bách</div>
        <div className="mx-1">
          <button className="btn btn-primary" onClick={this.handleAddNewUser}>
            Add new user
          </button>
        </div>
        <ModalUser
          isOpen={this.state.isOpenModal}
          toogleFromParent={this.toogleUserModal}
        />
        <div className="user-table">
          <table>
            <tr>
              <th>Email</th>
              <th>FullName</th>
              <th>Lastname</th>
              <th>address</th>
              <th>action</th>
            </tr>
            {arrUser &&
              arrUser.map((item, index) => {
                return (
                  <tr>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
