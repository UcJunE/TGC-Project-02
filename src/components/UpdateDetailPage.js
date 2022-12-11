import React from "react";
import axios from "axios";
import SuccessAdded from "../components/SuccessAdded";
import {
  BiArrowBack,
  BiCategory,
  BiHappyHeartEyes,
  BiLike,
  BiSearch,
  BiFilterAlt,
} from "react-icons/bi";
import "../css/SuccessAdded.css";
import "../css/UpdateDetailPage.css";

export default class UpdateDetailPage extends React.Component {
  BASE_API_URL = "https://ucjune-project02-database.onrender.com/";
  state = {
    data: [],
    updateCurrentId: "",
    updateName: "",
    updateBrand: "",
    updateNewDescription: "",
    updateType: "",
    updateYear: "",
    updatePrice: "",
    updateImageURL: "",
    updateScent: "select one",
    updateTopNote: "",
    updateMiddleNote: "",
    updateBaseNote: "",
    updateUserName: "",
    updateUserEmail: "",
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

    successAdded: false,
  };

  componentDidMount = () => {
    let currentId = this.props.foundResult._id;
    let name = this.props.foundResult.name;
    let brand = this.props.foundResult.brand;
    let newDescription = this.props.foundResult.description;
    let type = this.props.foundResult.type;
    let year = this.props.foundResult.yearLaunch;
    let price = this.props.foundResult.price;
    let imageURL = this.props.foundResult.picUrl;
    let scent = this.props.foundResult.scent;
    let topNote = this.props.foundResult.ingredient.topNote;
    let middleNote = this.props.foundResult.ingredient.middleNote;
    let baseNote = this.props.foundResult.ingredient.baseNote;
    let userName = this.props.foundResult.createdBy.userName;
    let userEmail = this.props.foundResult.createdBy.userEmail;

    this.setState({
      updateCurrentId: currentId,
      updateName: name,
      updateBrand: brand,
      updateNewDescription: newDescription,
      updateType: type,
      updateYear: year,
      updatePrice: price,
      updateImageURL: imageURL,
      updateScent: scent,
      updateTopNote: topNote,
      updateMiddleNote: middleNote,
      updateBaseNote: baseNote,
      updateUserName: userName,
      updateUserEmail: userEmail,
    });
  };

  updateFormField = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  closeSuccessAdded = () => {
    this.setState({ successAdded: false });
  };

  submitUpdate = async () => {
    //check for name
    if (!this.state.updateName || this.state.updateName.length > 50) {
      this.setState({ showNameError: true });
    } else {
      this.setState({ showNameError: false });
    }

    //check for brand
    if (!this.state.updateBrand || this.state.updateBrand.length > 50) {
      this.setState({ showBrandError: true });
    } else {
      this.setState({ showBrandError: false });
    }

    //check for description
    if (
      !this.state.updateNewDescription ||
      this.state.updateNewDescription > 200
    ) {
      this.setState({ showDescriptionError: true });
    } else {
      this.setState({ showDescriptionError: false });
    }

    //check for type
    if (!this.state.updateType) {
      this.setState({ showTypeError: true });
    } else {
      this.setState({ showTypeError: false });
    }

    //check for year
    if (!this.state.updateYear) {
      this.setState({ showYearError: true });
    } else {
      this.setState({ showYearError: false });
    }

    //check for image url
    if (!this.state.updateImageURL) {
      this.setState({ showImgError: true });
    } else {
      this.setState({ showImgError: false });
    }

    //check for scent
    if (this.state.updateScent) {
      this.setState({ showScentError: false });
    } else {
      this.setState({ showScentError: true });
    }

    //check for ingredient topnote
    if (!this.state.updateTopNote) {
      this.setState({ showTopNoteError: true });
    } else {
      this.setState({ showTopNoteError: false });
    }

    //check for middlenote
    if (!this.state.updateMiddleNote) {
      this.setState({ showMiddleNoteError: true });
    } else {
      this.setState({ showMiddleNoteError: false });
    }
    //check for base note
    if (!this.state.updateBaseNote) {
      this.setState({ showBaseNoteError: true });
    } else {
      this.setState({ showBaseNoteError: false });
    }

    //check for username
    if (!this.state.updateUserName) {
      this.setState({ showUserNameError: true });
    } else {
      this.setState({ showUserNameError: false });
    }

    //check for email
    if (
      this.state.updateUserEmail.includes("@") &&
      this.state.updateUserEmail.includes(".")
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
      this.state.updateName &&
      this.state.updateBrand &&
      this.state.updateNewDescription &&
      this.state.updateType &&
      this.state.updateYear &&
      this.state.updateImageURL &&
      this.state.updateScent &&
      this.state.updateTopNote &&
      this.state.updateMiddleNote &&
      this.state.updateBaseNote &&
      this.state.updateUserName &&
      this.state.updateUserEmail
    ) {
      let createdBy = {
        userName: this.state.updateUserName,
        userEmail: this.state.updateUserEmail,
      };

      try {
        let response = await axios.put(
          this.BASE_API_URL + "update-perfume/" + this.state.updateCurrentId,
          {
            name: this.state.updateName,
            description: this.state.updateNewDescription,
            type: this.state.updateType,
            yearLaunch: this.state.updateYear,
            picUrl: this.state.updateImageURL,
            scent: this.state.updateScent,
            createdBy: createdBy,
            brand: this.state.updateBrand,
            topNote: this.state.updateTopNote,
            middleNote: this.state.updateMiddleNote,
            baseNote: this.state.updateBaseNote,
          }
        );
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
          <button
            className="container btn-04 btn-effect-04 arrow-btn"
            onClick={() => {
              this.props.changeToShowDetailPage(this.state.updateCurrentId);
              this.props.refreshSearchResult();
            }}
          >
            <BiArrowBack className="b-arrow-04" />
            <p className="px-2 b-text-04">Back</p>
          </button>
          <div className="container" id="detail-container">
            <div className="container mt-3 py-4">
              <h3 className="container detail-title-03">Edit Your Perfume </h3>
            </div>
            <div className="container mt-3">
              <h3 className="sub-title-03">Perfume Name</h3>
              <input
                name="updateName"
                type="text"
                className="form-control sub-text mt-3"
                placeholder="Perfume Name"
                value={this.state.updateName}
                onChange={this.updateFormField}
              />
              {this.state.showNameError ? (
                <p className="err-msg">Please enter a perfume name</p>
              ) : (
                ""
              )}
            </div>
            <div className="container mt-3">
              <h3 className="sub-title-03 mt-3">Brand</h3>
              <input
                name="updateBrand"
                type="text"
                className="form-control sub-text"
                placeholder="Brand Name"
                value={this.state.updateBrand}
                onChange={this.updateFormField}
              />
              {this.state.showBrandError ? (
                <p className="err-msg">Please enter a brand name</p>
              ) : (
                ""
              )}
            </div>

            <div className="container mt-3" id="desc-container">
              <h4 className="sub-title-03">Description</h4>
              <textarea
                rows="3"
                name="updateNewDescription"
                type="text"
                className="form-control sub-text mt-3"
                placeholder="Description of the perfume"
                value={this.state.updateNewDescription}
                onChange={this.updateFormField}
              ></textarea>
              {this.state.showDescriptionError ? (
                <p className="err-msg">Please describe your perfume</p>
              ) : (
                ""
              )}
            </div>
            <div className="container mt-3" id="type-container">
              <h4 className="sub-title-03">Type</h4>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input mt-3"
                  type="radio"
                  name="updateType"
                  id="natural"
                  value="natural"
                  checked={this.state.updateType === "Natural"}
                  onChange={this.updateFormField}
                />

                <label className="form-check-label sub-text mt-2 px-2">
                  Natural
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="updateType"
                  id="synthetic"
                  value="synthetic"
                  checked={this.state.updateType === "Synthetic"}
                  onChange={this.updateFormField}
                />

                <label className="form-check-label sub-text">Synthetic</label>
              </div>
              {this.state.showTypeError ? (
                <p className="err-msg">Please select either one</p>
              ) : (
                ""
              )}
            </div>
            <div className="container mt-3">
              <h4 className="sub-title-03">Year Launch</h4>
              <input
                name="updateYear"
                type="text"
                className="form-control sub-text mt-3"
                placeholder="Integer Only"
                value={this.state.updateYear}
                onChange={this.updateFormField}
              />
              {this.state.showYearError ? (
                <p className="err-msg">Please enter only number</p>
              ) : (
                ""
              )}
            </div>
            <div className="container mt-3">
              <h4 className="sub-title-03">Image URL</h4>
              <input
                placeholder="Enter image URL"
                name="updateImageURL"
                type="text"
                className="form-control sub-text mt-3"
                value={this.state.updateImageURL}
                onChange={this.updateFormField}
              ></input>
              {this.state.showImgError ? (
                <p className="err-msg">Please enter valid URL</p>
              ) : (
                ""
              )}
            </div>
            <div className="container mt-3" id="scent-container">
              <h4 className="sub-title-03">Scent</h4>
              <select
                className="form-select inputbox sub-text mt-3"
                name="updateScent"
                selected
                onChange={this.updateFormField}
                value={this.state.updateScent}
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
              <h4 style={{ textAlign: "center" }} className="sub-title-03">
                Ingredient
              </h4>
            </div>

            <div
              className="container mt-3  d-flex flex-column sub-title-03"
              id="ingredient-container-top"
            >
              <h6 className="sub-title-03">Top Note</h6>
              <input
                name="updateTopNote"
                type="text"
                className="form-control sub-text mt-3"
                value={this.state.updateTopNote}
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
              className="container mt-3  d-flex flex-column sub-title-03"
              id="ingredient-container-mid"
            >
              <h6 className="sub-title-03">Middle Note</h6>
              <input
                name="updateMiddleNote"
                type="text"
                className="form-control sub-text mt-3"
                value={this.state.updateMiddleNote}
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
              <h6 className="sub-title-03">Base Note</h6>
              <input
                name="updateBaseNote"
                type="text"
                className="form-control sub-text"
                value={this.state.updateBaseNote}
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
            <div className="container mt-3 sub-title-03">
              <h4 className="sub-title-03">Created By</h4>
              <div className="container" id="user-container">
                <input
                  name="updateUserName"
                  type="text"
                  className="form-control mt-3 sub-text"
                  placeholder="User Name"
                  value={this.state.updateUserName}
                  onChange={this.updateFormField}
                ></input>
                {this.state.showUserNameError ? (
                  <p className="err-msg">Please provide a username</p>
                ) : (
                  ""
                )}
              </div>
              <div className="container sub-title-03" id="email-container">
                <input
                  name="updateUserEmail"
                  type="text"
                  className="form-control mt-2 sub-text mt-3"
                  placeholder="Email"
                  value={this.state.updateUserEmail}
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
                className="btn btn-04 btn-effect-04 update-btn"
                onClick={this.submitUpdate}
              >
                Update
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
