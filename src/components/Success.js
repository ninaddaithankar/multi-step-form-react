import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Form Submitted' />
          <h2 style={{ padding: "1em" }}>
            Thanks for testing this dummy form I made up using React and
            Material UI.
          </h2>
          <p>Further details will be emailed to you as soon as possible!</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
