import React from "react";

export default class CreatNewPage extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container" id="main-container">
          <div className="container" id="detail-container">
            <div className="container mt-3">
              <h3>New Perfume</h3>
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

<div className="container mt-3">
  <h4>Created By</h4>
  <div className="container" id="user-container">
    <input
      name="newUserName"
      type="text"
      class="form-control mt-2"
      placeholder="User Name"
      value=""
    ></input>
  </div>
  <div className="container" id="email-container">
    <input
      name="newEmail"
      type="text"
      class="form-control mt-2"
      placeholder="Email"
      value=""
    />
  </div>
</div>;
