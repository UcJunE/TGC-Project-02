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
    brandName: ["Givenchy", "Yves Saint Laurent", "Calvin Klein"],
    brand: "",
    sortBy: "natural", // there is 2 type but i set it default to natural
    searchScent: ["Citrus", "Cedar", "Romantic"], // just to show client the option of scent itself
    searchEmail: "",
    scent: "",
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  async componentDidMount() {
    try {
      let response = await axios.get(this.BASE_API_URL + "perfume");
      this.setState({ data: response.data.perfume });
      console.log(response.data.perfume);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container d-flex flex-wrap">
          <div className="container">
            <h5>Product Name</h5>
            <input
              name="searchName"
              type="textbox"
              className="form-control"
              id="searchByName"
              placeholder="Search by Product Name"
              value={this.state.searchName}
              onChange={this.updateFormField}
            />
          </div>
          <div className="container mt-3">
            <h5>Brand</h5>
            <select
              className="form-select"
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
                className="form-check-input"
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
              className="form-select"
              name="scent"
              onChange={this.updateFormField}
              value={this.state.scent}
            >
              <option disabled value="">
                Select One
              </option>
              {this.state.searchScent.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button className="mt-3">testing</button>
          </div>
          <h1> to show that all Perfume is rendering</h1>
          {this.state.data.map((r) => (
            <React.Fragment key={r._id}>
              <div className="card mt-3 ms-3">
                <img
                  src={r.picUrl}
                  className="card-img-top img-fluid"
                  alt="ck-one-img"
                />
                <div className="card-body">
                  <h5 className="card-title">{r.name}</h5>
                  <p className="card-text">{r.description}</p>
                  <h6 className="card-text">Price : ${r.price}</h6>
                  <p className="card-text">Color : {r.color}</p>
                  <p className="card-text">Scent type : {r.scent}</p>
                  <p className="card-text">Type : {r.type}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
