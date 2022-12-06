import React from "react";
import "../css/SingleDetailPage.css";

export default class SingleDetailPage extends React.Component {
  state = {
    data: [],
    selectedPerfumeId: [],
  };

  // to update the rating
  updateStar = (n) => {
    if (n === "1") {
      return <p> Rating :⭐</p>;
    } else if (n === "2") {
      return <p>Rating : ⭐⭐</p>;
    } else if (n === "3") {
      return <p>Rating : ⭐⭐⭐</p>;
    } else if (n === "4") {
      return <p>Rating : ⭐⭐⭐⭐</p>;
    } else if (n === "5") {
      return <p>Rating : ⭐⭐⭐⭐⭐</p>;
    } else {
      return <p> Rating : ✰ ✰ ✰ ✰ ✰</p>;
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello from detail post</h1>
        <div className="row">
          {this.props.detailSearchId.map((r) => (
            <React.Fragment key={r._id}>
              <div className="container detailImg d-flex justify-content-center">
                <img src={r.picUrl} alt="perfume-img.jpg"></img>
              </div>
              <div className="container detailTitle mt-4">
                <h1>{r.name}</h1>
                <div id="contentBox" className="container">
                  
                </div>
              </div>

              <button
                className="container-fluid"
                onClick={this.props.changeToCurrentPage}
              >
                Back
              </button>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
