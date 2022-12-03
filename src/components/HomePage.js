import React from "react";
import LandingPage from "../LandingPage";
import SearchPage from "../SearchPage";
import CreatNewPage from "../CreateNewPage";
import Profile from "../Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/HomePage.css";
import "../images/hp.png";

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
              <img
                className="logo"
                src={require("../images/hp.png")}
                alt="brand-icon"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active nav-text"
                    aria-current="page"
                    href="/#"
                    onClick={() => {
                      this.switchPage("landingPage");
                    }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-text"
                    href="/#"
                    onClick={() => {
                      this.switchPage("searchPage");
                    }}
                  >
                    Search
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-text"
                    href="/#"
                    onClick={() => {
                      this.switchPage("createNewPage");
                    }}
                  >
                    Create
                  </a>
                </li>
                <li className="nav-item nav-text">
                  <a
                    href="/#"
                    className="nav-link"
                    onClick={() => {
                      this.switchPage("profile");
                    }}
                  >
                    Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.renderPage()}
      </React.Fragment>
    );
  }
}
