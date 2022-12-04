import React from "react";

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
              <div className="card mt-3 ms-3 ">
                <img
                  src={r.picUrl}
                  className="card-img-top img-fluid"
                  alt="ck-one-img"
                />

                <h5 className="card-title">{r.name}</h5>
                <p className="card-text">Brand : {r.brand.name}</p>
                <h6 className="card-text">Price : ${r.price}</h6>

                <p className="card-text">Scent type : {r.scent}</p>
                <p className="card-text">Type : {r.type}</p>
                <h6 className="card-text">{this.updateStar(r.rating)}</h6>
                <p>{r.yearLaunch}</p>
                <p>PROBLEM , How to display object .</p>
                <button
                  className="container-fluid"
                  onClick={this.props.changeToCurrentPage}
                >
                  Back
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
