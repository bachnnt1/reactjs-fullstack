import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  noRefCheck = () => {
    this.props.toogleFromParent();
  };
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.noRefCheck}
        size="sm"
        centered
        className="boundary"
      >
        <ModalHeader toggle={this.noRefCheck}>Create a new user</ModalHeader>
        <ModalBody>
          <div className="input-container">
            <label>Email</label>
            <input type="text"></input>
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="password"></input>
          </div>
          <div className="input-container">
            <label>First name</label>
            <input type="password"></input>
          </div>
          <div className="input-container">
            <label>Last name</label>
            <input type="password"></input>
          </div>
          <div className="input-container">
            <label>address</label>
            <input type="password"></input>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.noRefCheck}>
            Do Something
          </Button>{" "}
          <Button onClick={this.noRefCheck}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
