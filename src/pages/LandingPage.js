import React from "react";
import "../css/HomePage.css";

export default class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1> Welcome ?</h1>
          <div className="container">
            <img src={require("../images/bg1-img.png")} alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
