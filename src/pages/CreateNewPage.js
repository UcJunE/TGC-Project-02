import React from "react";
import axios from "axios";
import SuccessAdded from "../components/SuccessAdded";
import "../css/CreateNewPage.css";

export default class CreatNewPage extends React.Component {
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
    successAdded: false,
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  closeSuccessAdded = () => {
    this.setState({ successAdded: false });
  };

  addNewSubmit = async () => {
    //check for name
    if (!this.state.name || this.state.name.length > 50) {
      this.setState({ showNameError: true });
    } else {
      this.setState({ showNameError: false });
    }

    //check for brand
    if (!this.state.brand || this.state.brand.length > 50) {
      this.setState({ showBrandError: true });
    } else {
      this.setState({ showBrandError: false });
    }

    //check for description
    if (!this.state.newDescription || this.state.newDescription > 200) {
      this.setState({ showDescriptionError: true });
    } else {
      this.setState({ showDescriptionError: false });
    }

    //check for type
    if (!this.state.type) {
      this.setState({ showTypeError: true });
    } else {
      this.setState({ showTypeError: false });
    }

    //check for year
    if (!this.state.year) {
      this.setState({ showYearError: true });
    } else {
      this.setState({ showYearError: false });
    }

    //check for image url
    if (!this.state.imageURL) {
      this.setState({ showImgError: true });
    } else {
      this.setState({ showImgError: false });
    }

    //check for scent
    if (this.state.scent) {
      this.setState({ showScentError: false });
    } else {
      this.setState({ showScentError: true });
    }

    //check for ingredient topnote
    if (!this.state.topNote) {
      this.setState({ showTopNoteError: true });
    } else {
      this.setState({ showTopNoteError: false });
    }

    //check for middlenote
    if (!this.state.middleNote) {
      this.setState({ showMiddleNoteError: true });
    } else {
      this.setState({ showMiddleNoteError: false });
    }
    //check for base note
    if (!this.state.baseNote) {
      this.setState({ showBaseNoteError: true });
    } else {
      this.setState({ showBaseNoteError: false });
    }

    //check for username
    if (!this.state.userName) {
      this.setState({ showUserNameError: true });
    } else {
      this.setState({ showUserNameError: false });
    }

    //check for email
    if (
      this.state.userEmail.includes("@") &&
      this.state.userEmail.includes(".")
    ) {
      this.setState({
        showUserEmaiError: false,
      });
    } else {
      this.setState({
        showUserEmaiError: true,
      });
    }

    // each field validation done . next . posting data to backend, check if all field is valid then only insert
    if (
      this.state.name &&
      this.state.brand &&
      this.state.newDescription &&
      this.state.type &&
      this.state.year &&
      this.state.imageURL &&
      this.state.scent &&
      this.state.topNote &&
      this.state.middleNote &&
      this.state.baseNote &&
      this.state.userName &&
      this.state.userEmail
    ) {
      let createdBy = {
        userName: this.state.userName,
        userEmail: this.state.userEmail,
      };

      try {
        let response = await axios.post(this.BASE_API_URL + "add-perfume", {
          name: this.state.name,
          description: this.state.newDescription,
          type: this.state.type,
          yearLaunch: this.state.year,
          picUrl: this.state.imageURL,
          scent: this.state.scent,
          createdBy: createdBy,
          brand: this.state.brand,
          topNote: this.state.topNote,
          middleNote: this.state.middleNote,
          baseNote: this.state.baseNote,
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      }
      this.setState({ successAdded: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container py-3" id="main-container">
          <div className="container" id="detail-container">
            <div className="container mt-3 py-4">
              <h3 className="container title">Tell Us About Your Perfume </h3>
            </div>
            <div className="container mt-3">
              <h3>Perfume Name</h3>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Perfume Name"
                value={this.state.name}
                onChange={this.updateFormField}
              />
              {this.state.showNameError ? (
                <p className="err-msg">Please enter a perfume name</p>
              ) : (
                ""
              )}
            </div>
            <div className="container">
              <h3>Brand</h3>
              <input
                name="brand"
                type="text"
                className="form-control"
                placeholder="Brand Name"
                value={this.state.brand}
                onChange={this.updateFormField}
              />
              {this.state.showBrandError ? (
                <p className="err-msg">Please enter a brand name</p>
              ) : (
                ""
              )}
            </div>

            <div className="container mt-3" id="desc-container">
              <h4>Description</h4>
              <textarea
                rows="3"
                name="newDescription"
                type="text"
                className="form-control "
                placeholder="Description of the perfume"
                value={this.state.newDescription}
                onChange={this.updateFormField}
              ></textarea>
              {this.state.showDescriptionError ? (
                <p className="err-msg">Please describe your perfume</p>
              ) : (
                ""
              )}
            </div>
            <div className="container mt-3" id="type-container">
              <h4>Type</h4>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="type"
                  id="natural"
                  value="natural"
                  checked={this.state.type === "natural"}
                  onChange={this.updateFormField}
                />

                <label className="form-check-label">Natural</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input "
                  type="radio"
                  name="type"
                  id="synthetic"
                  value="synthetic"
                  checked={this.state.type === "synthetic"}
                  onChange={this.updateFormField}
                />

                <label className="form-check-label">Synthetic</label>
              </div>
              {this.state.showTypeError ? (
                <p className="err-msg">Please select either one</p>
              ) : (
                ""
              )}
            </div>
            <div className="container mt-3">
              <h4>Year Launch</h4>
              <input
                name="year"
                type="text"
                className="form-control"
                placeholder="Integer Only"
                value={this.state.year}
                onChange={this.updateFormField}
              />
              {this.state.showYearError ? (
                <p className="err-msg">Please enter only number</p>
              ) : (
                ""
              )}
            </div>
            <div className="container mt-3">
              <h4>Image URL</h4>
              <input
                placeholder="Enter image URL"
                name="imageURL"
                type="text"
                className="form-control"
                value={this.state.imageURL}
                onChange={this.updateFormField}
              ></input>
              {this.state.showImgError ? (
                <p className="err-msg">Please enter valid URL</p>
              ) : (
                ""
              )}
            </div>
            <div className="container mt-3" id="scent-container">
              <h4>Scent</h4>
              <select
                className="form-select inputbox"
                name="scent"
                selected
                onChange={this.updateFormField}
                value={this.state.scent}
              >
                <option value="">Select One</option>
                {this.state.displayScent.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {this.state.showScentError ? (
                <p className="err-msg">Please select at least 1 </p>
              ) : (
                ""
              )}
            </div>

            <div className="container mt-3">
              <h4>Ingredient</h4>
            </div>

            <div
              className="container mt-3  d-flex flex-column"
              id="ingredient-container-top"
            >
              <h6>Top Note</h6>
              <input
                name="topNote"
                type="text"
                className="form-control"
                value={this.state.topNote}
                onChange={this.updateFormField}
                placeholder="Seperate each ingredient with comma "
              />
              {/* <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="50"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
              </button> */}
              {this.state.showTopNoteError ? (
                <p className="err-msg">Please do not leave it blank</p>
              ) : (
                ""
              )}
            </div>
            <div
              className="container mt-3  d-flex flex-column"
              id="ingredient-container-mid"
            >
              <h6>Middle Note</h6>
              <input
                name="middleNote"
                type="text"
                className="form-control"
                value={this.state.middleNote}
                onChange={this.updateFormField}
                placeholder="Seperate each ingredient with comma "
              />
              {/* <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="50"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
              </button> */}
              {this.state.showMiddleNoteError ? (
                <p className="err-msg">Please do not leave it blank</p>
              ) : (
                ""
              )}
            </div>
            <div
              className="container mt-3  d-flex flex-column"
              id="ingredient-container-base"
            >
              <h6>Base Note</h6>
              <input
                name="baseNote"
                type="text"
                className="form-control"
                value={this.state.baseNote}
                onChange={this.updateFormField}
                placeholder="Seperate each ingredient with comma "
              />
              {/* <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="50"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
              </button> */}
              {this.state.showBaseNoteError ? (
                <p className="err-msg">Please do not leave it blank</p>
              ) : (
                ""
              )}
            </div>
            <div className="container mt-3">
              <h4>Created By</h4>
              <div className="container" id="user-container">
                <input
                  name="userName"
                  type="text"
                  className="form-control mt-2"
                  placeholder="User Name"
                  value={this.state.userName}
                  onChange={this.updateFormField}
                ></input>
                {this.state.showUserNameError ? (
                  <p className="err-msg">Please provide a username</p>
                ) : (
                  ""
                )}
              </div>
              <div className="container" id="email-container">
                <input
                  name="userEmail"
                  type="text"
                  className="form-control mt-2"
                  placeholder="Email"
                  value={this.state.userEmail}
                  onChange={this.updateFormField}
                />
                {this.state.showUserEmaiError ? (
                  <p className="err-msg">
                    Please provide a valid email address
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="container mt-4 mb-4 pb-4  ">
              <button
                className="btn btn-outline-dark"
                onClick={this.addNewSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <SuccessAdded
          successAdded={this.state.successAdded}
          closeSuccessAdded={this.closeSuccessAdded}
        />
      </React.Fragment>
    );
  }
}
