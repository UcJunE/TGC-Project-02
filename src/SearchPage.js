import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/SearchPage.css";

export default class SearchPage extends React.Component {
  BASE_API_URL = "http://localhost:8888/";

  //basic query
  state = {
    data: [],
    searchName: "",
    brandName: ["Givenchy", "Yves Saint Laurent", "Calvin Klein", "Chanel"],
    brand: "",
    sortBy: "natural", // there is 2 type but i set it default to natural
    searchScent: ["Citrus", "Cedar", "Romantic", "Floral"], // just to show client the option of scent itself
    searchEmail: "",
    scent: "",
    ratingDisplay: [1, 2, 3, 4, 5],
    rating: "0",
    isFilterOpen: false,
  };

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

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  async componentDidMount() {
    try {
      let response = await axios.get(this.BASE_API_URL + "perfume");
      this.setState({ data: response.data });
    } catch (e) {
      console.log(e);
    }
  }

  filterSearch = async () => {
    try {
      let response = await axios.get(this.BASE_API_URL + "perfume", {
        params: {
          name: this.state.searchName,
          brand: this.state.brand,
          type: this.state.sortBy,
          scent: this.state.scent,
          rating: this.state.rating,
        },
      });
      this.setState({
        data: response.data,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // to check if the filter button is clicked or no
  toggleFilter = () => {
    if (this.state.isFilterOpen) {
      this.setState({
        isFilterOpen: false,
      });
    } else {
      this.setState({
        isFilterOpen: true,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="container" id="search-container">
            <div className="container  mb-3">
              <input
                name="searchName"
                type="textbox"
                className="form-control inputbox"
                id="searchByName"
                placeholder="Search by Product Name"
                value={this.state.searchName}
                onChange={this.updateFormField}
              />
              <div>
                <button
                  className="btn btn-primary filterBtn"
                  onClick={this.filterSearch}
                >
                  Search
                </button>
                <button
                  className="btn btn-primary filterBtn"
                  onClick={this.toggleFilter}
                >
                  Filter
                </button>
              </div>
            </div>
            <div
              id="searchFiltersBox"
              className={
                this.state.isFilterOpen ? "showFilters" : "hideFilters"
              }
            >
              <div className="container">
                <h5>Brand</h5>
                <select
                  className="form-select inputbox"
                  name="brand"
                  onChange={this.updateFormField}
                  value={this.state.brand}
                >
                  <option disabled value="">
                    Select One
                  </option>
                  {this.state.brandName.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div className="container mt-3">
                <h5>Type</h5>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sortBy"
                    id="natural"
                    value="natural"
                    checked={this.state.sortBy === "natural"}
                    onChange={this.updateFormField}
                  />
                  <label className="form-check-label">Natural</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input "
                    type="radio"
                    name="sortBy"
                    id="synthetic"
                    value="synthetic"
                    checked={this.state.sortBy === "synthetic"}
                    onChange={this.updateFormField}
                  />
                  <label className="form-check-label">Synthetic</label>
                </div>
              </div>
              <div className="container mt-3">
                <h5>Scent</h5>
                <select
                  className="form-select inputbox"
                  name="scent"
                  onChange={this.updateFormField}
                  value={this.state.scent}
                >
                  <option value="">Select One</option>
                  {this.state.searchScent.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div className="container mt-3">
                <h5>Rating</h5>
                <select
                  className="form-select inputbox"
                  name="rating"
                  onChange={this.updateFormField}
                  value={this.state.rating}
                >
                  <option value="">Select One</option>
                  {this.state.ratingDisplay.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <button
                  className="mt-3 btn btn-primary"
                  onClick={this.filterSearch}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.data.map((r) => (
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
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
