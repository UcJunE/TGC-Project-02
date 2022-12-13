import React from "react";
import axios from "axios";
import Loading from "../components/Loading";
import "../css/ProfilePage.css";
import ShowDetailPage from "../components/ShowDetailPage";
import UpdateDetailPage from "../components/UpdateDetailPage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Profile extends React.Component {
  BASE_API_URL = "https://ucjune-project02-database.onrender.com/";

  state = {
    data: [],
    currentPage: "profile",
    userName: "",
    userEmail: "",
    currentId: null,
    isLoading: false,
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
    //show no result,
    showNoResult: false,
    showEmailError: false,
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  isLoading = () => {
    this.setState({ isLoading: true });
  };

  closeLoading = () => {
    this.setState({ isLoading: false });
  };

  changeToShowDetailPage = (r) => {
    this.setState({ currentPage: "showDetail", currentId: r });
  };

  changeToProfilePage = () => {
    this.setState({
      currentPage: "profile",
      userEmail: "",
      showNoResult: false,
    });
    console.log("CHANGE TO PROFILE PAGE");
  };

  changeToUpdatePage = (r) => {
    this.setState({ currentPage: "update", currentId: r });
  };

  // to search document via the email that createdby
  searchUserPerfume = async () => {
    if (this.state.userEmail) {
      this.isLoading();
      try {
        let response = await axios.get(this.BASE_API_URL + "perfume", {
          params: {
            createdBy: this.state.userEmail,
          },
        });

        let data = response.data;

        if (!data.length) {
          this.setState({ data: data, showEmailError: true, userEmail: "" });
          console.log("No data found");
        } else {
          this.setState({
            data: data,
            showNoResult: false,
            showEmailError: false,
            currentPage: "showDetail",
          });
          console.log("Found it");
          // console.log(data);
        }
        this.closeLoading();
      } catch (e) {
        console.log(e);
      }
    } else {
      this.setState({ showNoResult: true, showEmailError: true });
    }
  };

  deleteCurrentPost = async (r) => {
    console.log(r);
    await axios.delete(this.BASE_API_URL + "delete-perfume/" + r);
    const notifyDelete = () =>
      toast.success("Your collection is deleted !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    notifyDelete();
    this.searchUserPerfume();
    console.log(" ITS DELETED");
    this.setState({ currentPage: "showDetail", data: this.state.data });
  };

  renderPage = () => {
    if (this.state.currentPage === "profile") {
      return (
        <div className="container login-box mt-3 py-4">
          {this.state.isLoading ? <Loading /> : ""}
          <div className="container mt-4">
            <h1 className="detail-title-03 login-text">
              Enter Email To Proceed
            </h1>
          </div>
          <div className="container mt-4 mb-3">
            <input
              className="form-control"
              type="text"
              name="userEmail"
              value={this.state.userEmail}
              onChange={this.updateFormField}
              placeholder="Enter Your Email"
            />
            <div className="container  mt-2">
              {this.state.showEmailError ? (
                <p className="err-msg" style={{ textAlign: "left" }}>
                  Please enter a valid email address
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <button
            className="btn btn-03 btn-effect-03 mt-3 login-btn"
            onClick={this.searchUserPerfume}
          >
            Login
          </button>
        </div>
      );
    } else if (this.state.currentPage === "showDetail") {
      return (
        <React.Fragment>
          <ShowDetailPage
            foundResult={this.state.data}
            changeToProfilePage={this.changeToProfilePage}
            changeToUpdatePage={this.changeToUpdatePage}
            deletePost={this.deleteCurrentPost}
            refreshSearchResult={this.searchUserPerfume}
          />
        </React.Fragment>
      );
    } else if (this.state.currentPage === "update") {
      return (
        <React.Fragment>
          <UpdateDetailPage
            foundResult={this.state.currentId}
            changeToShowDetailPage={this.changeToShowDetailPage}
            refreshSearchResult={this.searchUserPerfume}
          />
        </React.Fragment>
      );
    }
  };

  render() {
    return <React.Fragment>{this.renderPage()}</React.Fragment>;
  }
}
