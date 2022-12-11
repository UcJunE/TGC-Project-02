import React from "react";
import axios from "axios";
import { GiBrandyBottle, GiDelicatePerfume } from "react-icons/gi";
import {
  BiCategory,
  BiHappyHeartEyes,
  BiLike,
  BiSearch,
  BiFilterAlt,
} from "react-icons/bi";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/SearchPage.css";
import "../components/SingleDetailPage";
import Loading from "../components/Loading";
import SingleDetailPage from "../components/SingleDetailPage";

export default class SearchPage extends React.Component {
  BASE_API_URL = "https://ucjune-project02-database.onrender.com/";

  //basic query
  state = {
    data: [],
    searchName: "",
    brandName: ["Givenchy", "Yves Saint Laurent", "Calvin Klein", "Chanel"],
    brand: "",
    sortBy: "Natural", // there is 2 type but i set it default to natural
    searchScent: ["Citrus", "Cedar", "Romantic", "Floral"], // just to show client the option of scent itself
    searchEmail: "",
    scent: "",
    ratingDisplay: [1, 2, 3, 4, 5],
    rating: "0",
    isFilterOpen: false,
    isLoading: false,
    page: "current",
    detailSearchId: null,
    detailSearchPressed: false,
    singlePerfumeObject: [],
  };

  isLoading = () => {
    this.setState({ isLoading: true });
  };

  closeLoading = () => {
    this.setState({ isLoading: false });
  };

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

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  async componentDidMount() {
    this.isLoading();
    try {
      let response = await axios.get(this.BASE_API_URL + "perfume");
      this.setState({ data: response.data });
    } catch (e) {
      console.log(e);
    }
    this.closeLoading();
  }

  //what is componentDidUpdate??

  // async componentDidUpdate() {
  //   if (
  //     this.state.detailSearchPressed === true &&
  //     Object.keys(this.state.singlePerfumeObject).length === 0
  //   ) {
  //     console.log(this.state.singlePerfumeObject);
  //     let x = this.state.singlePerfumeObject;

  //     let endpoint = this.BASE_API_URL + "perfume" + x;

  //     let response = await axios.get(endpoint);

  //     this.setState({
  //       singlePerfumeObject: response.data[0],
  //     });
  //   }
  // }

  filterSearch = async () => {
    this.isLoading();
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
        isFilterOpen: false,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
    this.closeLoading();
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

  // to change the state into detailed page
  changeToDetailPage = (r) => {
    this.setState({
      page: "detail",
      detailSearchPressed: true,
      detailSearchId: r, // r is an object
    });
  };

  //revert back to search page
  changeToCurrentPage = () => {
    this.setState({ page: "current" });
  };

  // render page between current page and detail page
  renderPage = () => {
    if (this.state.page === "detail") {
      try {
        console.log([this.state.detailSearchId]);
      } catch (e) {
        console.log(e);
      }
      return (
        <React.Fragment>
          <SingleDetailPage
            changeToCurrentPage={this.changeToCurrentPage}
            detailSearchId={[this.state.detailSearchId]}
          />
        </React.Fragment>
      );
    } else if (this.state.page === "current") {
      return (
        <React.Fragment>
          <div className="container">
            <div className="container" id="search-container">
              <div className="mb-3 px-3 main-container">
                <input
                  name="searchName"
                  type="textbox"
                  className="form-control inputbox"
                  id="searchByName"
                  placeholder="Search by Product Name"
                  value={this.state.searchName}
                  onChange={this.updateFormField}
                />
                <div className="container btn-box">
                  <button
                    className="btn  btn-effect "
                    onClick={this.filterSearch}
                  >
                    <BiSearch className="search-icon" />
                  </button>
                  <button
                    className="btn  btn-effect "
                    onClick={this.toggleFilter}
                  >
                    <BiFilterAlt className="search-icon" />
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
                      value="Natural"
                      checked={this.state.sortBy === "Natural"}
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
                      value="Synthetic"
                      checked={this.state.sortBy === "Synthetic"}
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
                    className="mt-3 btn btn-effect"
                    onClick={this.filterSearch}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            {this.state.isLoading ? <Loading /> : ""}
            <div className="row">
              {this.state.data.map((r) => (
                <div className="col col-12 col-lg-4 col-md-6" key={r._id}>
                  <div className="card mt-3 ms-3 img-wrapper">
                    <img
                      src={r.picUrl}
                      className="card-img-top img-fluid zoom"
                      alt="perfume-img"
                    />
                    <div className="content fade container">
                      <div className="container perfume-box">
                        <h4 className="perfume-name">
                          <GiDelicatePerfume className="brand-icon" /> {r.name}
                        </h4>
                      </div>
                      <div className="container-fluid ">
                        <h5 className="perfume-text">
                          <GiBrandyBottle className="brand-icon" /> {r.brand}
                        </h5>
                      </div>
                      <div className="container">
                        <h5 className="perfume-text">
                          <BiHappyHeartEyes className="brand-icon" /> {r.scent}
                        </h5>
                      </div>
                      <div className="container">
                        <h5 className="perfume-text">
                          <BiCategory className="brand-icon" /> {r.type}
                        </h5>
                      </div>
                      <div className="container">
                        <h5 className="perfume-text">
                          <BiLike className="brand-icon" />
                          {this.updateStar(r.rating)}
                        </h5>
                      </div>

                      <button
                        className="container-fluid btn btn-effect"
                        onClick={() => {
                          this.changeToDetailPage(r);
                        }}
                      >
                        Show more
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return <React.Fragment>{this.renderPage()}</React.Fragment>;
  }
}
