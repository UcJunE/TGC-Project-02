import React from "react";
import LandingPage from "./LandingPage";
import SearchPage from "./SearchPage";
import CreatNewPage from "./CreateNewPage";
import Profile from "./Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/HomePage.css";

export default class HomePage extends React.Component {
  state = {
    active: "landingPage",
  };

  renderPage = () => {
    if (this.state.active === "searchPage") {
      return <SearchPage />;
    } else if (this.state.active === "createNewPage") {
      return <CreatNewPage />;
    } else if (this.state.active === "profile") {
      return <Profile />;
    } else if (this.state.active === "landingPage") {
      return <LandingPage />;
    }
  };

  setActive = (page) => {
    this.setState({
      active: page,
    });
  };

  switchPage = (page) => {
    this.setState({
      active: page,
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              To be decide
            </a>
            <div className="navbar-nav">
              <a
                className="nav-link active"
                aria-current="page"
                href="/#"
                onClick={() => {
                  this.switchPage("landingPage");
                }}
              >
                Home
              </a>

              <a
                className="nav-link"
                href="/#"
                onClick={() => {
                  this.switchPage("searchPage");
                }}
              >
                Search
              </a>

              <a
                className="nav-link"
                href="/#"
                onClick={() => {
                  this.switchPage("createNewPage");
                }}
              >
                Create
              </a>

              <a
                className="nav-link"
                href="/#"
                onClick={() => {
                  this.switchPage("profile");
                }}
              >
                Profile
              </a>
            </div>
          </div>
        </nav>
        {this.renderPage()}
      </React.Fragment>
    );
  }
}
