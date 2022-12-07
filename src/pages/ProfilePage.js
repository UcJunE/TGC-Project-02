import React from "react";
import UpdateDetailPage from "../components/UpdateDetailPage";

export default class Profile extends React.Component {
  BASE_API_URL = "http://localhost:8888/";
  
  state = {
    data: [],
    name: "",
    brand: "",
    newDescription: "",
    type: "",
    year: "",
    price: "",
    imageURL: "",
    scent: "select one",
    topNote: "",
    middleNote: "",
    baseNote: "",
    userName: "",
    userEmail: "",
    createdBy: {},
    displayScent: ["Citrus", "Cedar", "Romantic", "Floral"],
    //validation part
    showNameError: false,
    showBrandError: false,
    showDescriptionError: false,
    showTypeError: false,
    showScentError: false,
    showYearError: false,
    showImgError: false,
    showTopNoteError: false,
    showMiddleNoteError: false,
    showBaseNoteError: false,
    showUserNameError: false,
    showUserEmaiError: false,
    //to close it after add
    showProcessAddNew: false,
  };

  updateFormField = (e) => {
    [e.target.name] = e.target.value;
  };




  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1>Login</h1>
          <div>User Name</div>
          <div>
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.updateFormField}
            />
          </div>
          <div className="container">Email</div>
          <div>
            <input
              type="email"
              name="userEmail"
              value={this.state.userEmail}
              onChange={this.updateFormField}
            />
          </div>
        </div>
        <UpdateDetailPage />
      </React.Fragment>
    );
  }
}
