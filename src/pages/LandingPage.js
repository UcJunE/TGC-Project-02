import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsTelegram } from "react-icons/bs";
import "../css/HomePage.css";

export default class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid hero-sec">
          <img
            className="img-fluid"
            src={require("../images/bg-2.png")}
            alt="background-img"
          />
          <div className="card-body">
            <h1 className="card-title main-text">Perfect Balance of Passion</h1>
            <h2 className="card-text mainsub-text">Passion&Smell</h2>
            <h3 className="card-text mainsub-text">
              Share Us Your Favourite Perfume
            </h3>
          </div>
          <div className="container">
            <button class="btn btn-custom">Sign Up</button>
            <button href="#" class="btn btn-custom">
              Begin
            </button>
          </div>
          <div className="container">
            <p class="text">Stay in touch with our community</p>
            <BsFacebook /> <BsInstagram /> <BsTwitter /> <BsTelegram />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
