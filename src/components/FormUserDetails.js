import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

export class FormUserDetails extends Component {
  render() {
    const { values } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter User Details' />
          <TextField
            hintText='Enter First Name'
            floatingLabelText='First Name'
            defaultValue={values.firstName}
            onChange={this.props.handleChange("firstName")}
          />
          <br />
          <TextField
            hintText='Enter Last Name'
            floatingLabelText='Last Name'
            defaultValue={values.lastName}
            onChange={this.props.handleChange("lastName")}
          />
          <br />
          <TextField
            hintText='Enter Age'
            floatingLabelText='Age'
            defaultValue={values.age}
            onChange={this.props.handleChange("age")}
          />
          <br />
          <RaisedButton
            label='Continue'
            style={styles.button}
            primary={true}
            onClick={this.props.nextStep}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: "2rem"
  }
};

export default FormUserDetails;
