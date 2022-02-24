import MarkdownIt from "markdown-it";
import React, { Component } from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { connect } from "react-redux";
import Select from "react-select";
import {
  getAllDoctorAction,
  postDoctorAction,
} from "../../../store/actions/adminActions";
import "./ManageDoctor.scss";
import "./TableManageUser.scss";
import { languages } from "../../../utils";
import { getDetailDoctorById } from "../../../services/userService";

const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDoctor: "",
      contentMarkdown: "",
      contentHTML: "",
      description: "",
      listDoctors: [],
      listOptionDoctors: [],
      isEdit: false,
    };
  }

  async componentDidMount() {
    this.props.getAllDoctorAction();
  }
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

  handleEditorChange = ({ html, text }) => {
    this.setState({
      contentMarkdown: text,
      contentHTML: html,
    });
  };

  deleteUser = (userId) => {
    this.props.deleteUserRedux(userId);
  };
  handleChange = async (event) => {
    let doctorDetail = await getDetailDoctorById(event.value);
    if (
      doctorDetail &&
      doctorDetail.response &&
      doctorDetail.response.data &&
      doctorDetail.response.data.Markdown
    ) {
      this.setState({
        contentHTML: doctorDetail.response.data.Markdown.contentHTML,
        contentMarkdown: doctorDetail.response.data.Markdown.contentMarkdown,
        description: doctorDetail.response.data.Markdown.description,
        isEdit: true,
        selectedDoctor: event,
      });
    } else {
      this.setState({
        contentHTML: "",
        contentMarkdown: "",
        description: "",
        isEdit: false,
        selectedDoctor: event,
      });
    }
  };
  handleOnChangeDes = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  submit = () => {
    let data = {
      contentHTML: this.state.contentHTML,
      contentMarkdown: this.state.contentMarkdown,
      description: this.state.description,
      doctorId: this.state.selectedDoctor.value,
      action: this.state.isEdit,
    };
    this.props.postDoctorAction(data);
  };
  render() {
    let {
      selectedDoctor,
      description,
      listOptionDoctors,
      isEdit,
      contentMarkdown,
    } = this.state;
    return (
      <>
        <h3 className="title">Manage doctor</h3>
        <div className="more-info">
          <Select
            className="select"
            value={selectedDoctor}
            onChange={(event) => this.handleChange(event)}
            options={listOptionDoctors}
            placeholder="Chọn bác sĩ"
          />
          <textarea
            className="text-area"
            onChange={(event) => this.handleOnChangeDes(event)}
            value={description}
          ></textarea>
        </div>
        <MdEditor
          style={{ height: "500px" }}
          renderHTML={(text) => mdParser.render(text)}
          onChange={this.handleEditorChange}
          value={contentMarkdown}
        />
        <div className="submit">
          <button onClick={() => this.submit()}>
            {isEdit ? "Sửa thông tin" : "Lưu thông tin"}
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.admin.users,
    allDoctors: state.admin.allDoctors,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDoctorAction: () => dispatch(getAllDoctorAction()),
    postDoctorAction: (data) => dispatch(postDoctorAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
