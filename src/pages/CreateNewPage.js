import React from "react";
import "../css/CreateNewPage.css";

export default class CreatNewPage extends React.Component {
  state = {
    displayScent: ["Citrus", "Cedar", "Romantic", "Floral"],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container" id="main-container">
          <div className="container" id="detail-container">
            <div className="container mt-3 pt-4">
              <h3 className="title">New Perfume</h3>
              <div className="container mt-3">
                <input
                  name="newName"
                  type="text"
                  class="form-control"
                  placeholder="Perfume Name"
                  value=""
                />
                <h3>Brand</h3>
                <input
                  name="newName"
                  type="text"
                  class="form-control"
                  placeholder="Brand Name"
                  value=""
                />
              </div>
            </div>
            <div className="container mt-3" id="desc-container">
              <h4>Description</h4>
              <textarea
                rows="3"
                name="newDescription"
                type="text"
                class="form-control "
                placeholder="Description of the perfume"
              ></textarea>
            </div>
            <div className="container mt-3" id="type-container">
              <h4>Type</h4>
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
              <h4>Year</h4>
              <input
                name="yearLaunch"
                type="text"
                className="form-control"
                placeholder="Year Launch"
                value=""
              />
            </div>
            <div className="container mt-3">
              <h4>Image URL</h4>
              <input
                placeholder="Enter image URL"
                name="imageUrl"
                type="text"
                class="form-control"
                value=""
              ></input>
            </div>
            <div className="container mt-3" id="scent-container">
              <h4>Scent</h4>
              <select
                className="form-select inputbox"
                name="scent"
                onChange={this.updateFormField}
                value={this.state.scent}
              >
                <option value="">Select One</option>
                {this.state.displayScent.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div className="container mt-3">
              <h4>Ingredient</h4>
            </div>

            <div
              className="container mt-3  d-flex"
              id="ingredient-container-top"
            >
              <input
                name="material"
                type="text"
                className="form-control"
                value=""
                placeholder="Top Note Ingredient"
              />
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="50"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
              </button>
            </div>
            <div
              className="container mt-3  d-flex"
              id="ingredient-container-mid"
            >
              <input
                name="material"
                type="text"
                className="form-control"
                value=""
                placeholder="Middle Note Ingredient"
              />
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="50"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
              </button>
            </div>
            <div
              className="container mt-3  d-flex"
              id="ingredient-container-base"
            >
              <input
                name="material"
                type="text"
                className="form-control"
                value=""
                placeholder="Base Note Ingredient"
              />
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="50"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
              </button>
            </div>
            <div className="container mt-3">
              <h4>Created By</h4>
              <div className="container" id="user-container">
                <input
                  name="newUserName"
                  type="text"
                  className="form-control mt-2"
                  placeholder="User Name"
                  value=""
                ></input>
              </div>
              <div className="container" id="email-container">
                <input
                  name="newEmail"
                  type="text"
                  className="form-control mt-2"
                  placeholder="Email"
                  value=""
                />
              </div>
            </div>
            <div className="container mt-4 mb-4 pb-4  ">
              <button className="btn btn-outline-dark">Submit</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
