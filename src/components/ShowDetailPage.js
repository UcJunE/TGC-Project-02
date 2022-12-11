import React from "react";

export default class ShowDetailPage extends React.Component {
  state = {
    isLoading: false,
    currentId: null,
  };

  isLoading = () => {
    this.setState({ isLoading: true });
  };

  closeLoading = () => {
    this.setState({ isLoading: false });
  };

  changeToShowDetailPage = (r) => {
    this.setState({ currentId: r });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mb-4" id="detailBox">
          {this.props.foundResult.map((r) => (
            <React.Fragment key={r._id}>
              <div className="container detailImg d-flex justify-content-center mb-4">
                <img src={r.picUrl} alt="perfume-img.jpg"></img>
              </div>
              <div className="container detailTitle mt-4">
                <h1>{r.name}</h1>
                <div id="contentBox" className="container">
                  <h2>{r.brand}</h2>
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
                onClick={() => {
                  console.log(r._id);
                  this.props.deletePost(r._id);
                  this.props.refreshSearchResult();
                }}
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
