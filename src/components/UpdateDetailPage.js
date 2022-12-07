import React from "react";

export default class UpdateDetailPage extends React.Component {
  state = {
    //validation part
    showNameError: false,
    showBrandError: false,
    showDescriptionError: false,
    showTypeError: false,
    showScentError: false,
    showYearError: false,
    showImgError: false,
    showTopNoteError: false,
    showMiddleNoteError: false,
    showBaseNoteError: false,
    showUserNameError: false,
    showUserEmaiError: false,
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello from update</h1>
      </React.Fragment>
    );
  }
}
