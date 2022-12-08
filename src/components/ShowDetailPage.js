import React from "react";

export default class ShowDetailPage extends React.Component {
  state = {
    isLoading: false,
  };

  isLoading = () => {
    this.setState({ isLoading: true });
  };

  closeLoading = () => {
    this.setState({ isLoading: false });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mb-4">
          {this.props.foundResult.map((r) => (
            <React.Fragment key={r._id}>
              <div className="container detailImg d-flex justify-content-center mb-4">
                <img src={r.picUrl} alt="perfume-img.jpg"></img>
              </div>
              <div className="container detailTitle mt-4">
                <h1>{r.name}</h1>
                <div id="contentBox" className="container">
                  <div className="container">
                    <p>{r.description}</p>
                  </div>
                  <div className="container">
                    {r.ingredient.topNote.join(" , ")}
                  </div>
                  <div className="container">
                    {r.ingredient.middleNote.join(" , ")}
                  </div>
                  <div className="container">
                    {r.ingredient.baseNote.join(" , ")}
                  </div>
                  <div className="container">{r.price}</div>
                </div>
              </div>

              <button
                className="btn btn-lg btn-outline-dark"
                onClick={() => {
                  this.props.changeToUpdatePage(r);
                }}
              >
                EDIT
              </button>
              <button
                className="btn btn-lg btn-outline-dark"
                onClick={this.props.changeToProfilePage}
              >
                Delete
              </button>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
