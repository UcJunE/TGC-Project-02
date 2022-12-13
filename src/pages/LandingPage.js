import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsTelegram } from "react-icons/bs";
import "../css/HomePage.css";
export default class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid hero-sec row">
          <img
            className="img-fluid col-lg-6 col-md-12 col-sm-12 hero-img mb-3 mt-3"
            src={require("../images/bg-05.png")}
            alt="background-img"
          />
          <div className="card-body col-lg-6 col-md-12 col-sm-12 hero-content">
            <h1 className="card-title main-text">Perfect Balance of Passion</h1>
            <h3 className="card-text mainsub-text">
              “Perfume puts the finishing touch to elegance — a detail that
              subtly underscores the look, an invisible extra that completes a
              man and a woman’s personality. Without it, there is something
              missing.” – Gianni Versace
            </h3>
            <div className="container btn-custom d-flex">
              <button className="btn btn-04 btn-effect-04 sub-title-04 landing-btn">
                Sign Up
              </button>
              <button
                href="#"
                className="btn btn-04 btn-effect-04 sub-title-04 landing-btn-02"
                onClick={() => {
                  return this.props.switchPage("searchPage");
                }}
              >
                Begin
              </button>
            </div>
            <div className="container mt-3 ms-2 mb-2" id="logo-box">
              <p className="text-connect">Stay in touch with our community</p>
              <BsFacebook className="text-logo" />{" "}
              <BsInstagram className="text-logo" />{" "}
              <BsTwitter className="text-logo" />{" "}
              <BsTelegram className="text-logo" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
