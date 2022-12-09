import React from "react";
import axios from "axios";
import "../css/ProfilePage.css";
import ShowDetailPage from "../components/ShowDetailPage";
import UpdateDetailPage from "../components/UpdateDetailPage";

export default class Profile extends React.Component {
  BASE_API_URL = "http://localhost:8888/";

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
    showNoResult: true,
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
    this.setState({ currentPage: "profile" });
    console.log("CHANGE TO PROFILE PAGE");
  };

  changeToUpdatePage = (r) => {
    this.setState({ currentPage: "update", currentId: r });
  };

  deleteCurrentPost = async (r) => {
    console.log(r);
    await axios.delete(
      this.BASE_API_URL + "delete-perfume/" + r
    );
    console.log(" ITS DELETED");
  };

  // to search document via the email that createdby
  searchUserPerfume = async () => {
    this.isLoading();
    if (this.state.userEmail) {
      try {
        let response = await axios.get(this.BASE_API_URL + "perfume", {
          params: {
            createdBy: this.state.userEmail,
          },
        });

        let data = response.data;

        if (!data.length) {
          this.setState({ data: data });
          console.log("No data founded");
        } else {
          this.setState({
            data: data,
            showNoResult: false,
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
      this.setState({ showNoResult: true });
    }
  };

  renderPage = () => {
    if (this.state.currentPage === "profile") {
      return (
        <React.Fragment>
          <div className="container">
            <div className="container">
              <h1>Login</h1>
              <div className="container">Email</div>
              <div>
                <input
                  type="text"
                  name="userEmail"
                  value={this.state.userEmail}
                  onChange={this.updateFormField}
                />
              </div>
              <button onClick={this.searchUserPerfume}>Login</button>
            </div>
          </div>
        </React.Fragment>
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
