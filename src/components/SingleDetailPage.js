import React from "react";
import { GiBrandyBottle, GiDelicatePerfume } from "react-icons/gi";
import {
  BiArrowBack,
  BiCategory,
  BiHappyHeartEyes,
  BiLike,
  BiSearch,
  BiFilterAlt,
} from "react-icons/bi";
import "../css/SingleDetailPage.css";

export default class SingleDetailPage extends React.Component {
  state = {
    data: [],
    selectedPerfumeId: [],
  };

  // to update the rating
  updateStar = (n) => {
    if (n === "1") {
      return `  ⭐`;
    } else if (n === "2") {
      return `  ⭐⭐`;
    } else if (n === "3") {
      return `  ⭐⭐⭐`;
    } else if (n === "4") {
      return `  ⭐⭐⭐⭐`;
    } else if (n === "5") {
      return `  ⭐⭐⭐⭐⭐`;
    } else {
      return `  ✰ ✰ ✰ ✰ ✰`;
    }
  };

  render() {
    return (
      <React.Fragment>
        <button
          className="container btn-02 btn-effect-02 d-flex"
          onClick={this.props.changeToCurrentPage}
        >
          <BiArrowBack className="b-arrow" />
          <p className="px-2 b-text">Back</p>
        </button>

        {this.props.detailSearchId.map((r) => (
          <div className="main-box-02" key={r._id}>
            <div className="container img-box mt-3 img-fluid">
              <img
                className="parfum-img"
                src={r.picUrl}
                alt="perfume-img.jpg"
              ></img>
            </div>

            <div className="container mt-4">
              <div className="container">
                <div className="container mb-4 detail-title">
                  <h1>{r.brand}</h1>
                </div>
                <div className="container mb-4 sub-text">
                  <h2>{r.name}</h2>
                </div>
              </div>

              <hr />
              <div id="content-Box" className="container mb-4">
                <div className="container sub-title mb-3">
                  <h2>Description</h2>
                </div>
                <div className="container sub-text">{r.description}</div>
              </div>

              <hr />
              <div className="container type-box">
                <div className="container sub-title">
                  <h4>Type</h4>
                </div>
                <div className="container mb-3 sub-text">{r.type}</div>
                <div className="container sub-title">
                  <h4>Year</h4>
                </div>
                <div className="container mb-3 sub-text">{r.yearLaunch}</div>
              </div>

              <hr />
              <div className="container" id="ingredient-box">
                <div className="container mb-4 detail-title">
                  <h2>Perfume Pyramid</h2>
                </div>
                <div className="container sub-title mb-3">
                  <h4>Top Notes</h4>
                </div>
                <div className="container mb-3 sub-text">
                  {r.ingredient.topNote.join(" , ")}
                </div>
                <div className="container sub-title mb-3">
                  <h4>Heart Notes</h4>
                </div>
                <div className="container mb-3 sub-text">
                  {r.ingredient.middleNote.join(" , ")}
                </div>
                <div className="container sub-title mb-3">
                  <h4>Base Note</h4>
                </div>
                <div className="container mb-3 sub-text">
                  {r.ingredient.baseNote.join(" , ")}
                </div>
              </div>
              <hr />
              <div className="container">
                <div className="container d-flex sub-title py-3">
                  <h4 className="">Rating</h4>
                  <h5 className="mx-3">{this.updateStar(r.rating)}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
