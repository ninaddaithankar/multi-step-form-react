import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

export class FormPersonalDetails extends Component {
  render() {
    const { values } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter Personal Details' />
          <TextField
            hintText='Enter Job'
            floatingLabelText='Job'
            defaultValue={values.occupation}
            onChange={this.props.handleChange("occupation")}
          />
          <br />
          <TextField
            hintText='Enter Description'
            floatingLabelText='Desription'
            defaultValue={values.description}
            onChange={this.props.handleChange("description")}
          />
          <br />
          <TextField
            hintText='Enter Company'
            floatingLabelText='Company'
            defaultValue={values.company}
            onChange={this.props.handleChange("company")}
          />
          <br />
          <RaisedButton
            label='Continue'
            style={styles.button}
            primary={true}
            onClick={this.props.nextStep}
          />
          <RaisedButton
            label='Back'
            style={styles.button}
            primary={false}
            onClick={this.props.prevStep}
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

export default FormPersonalDetails;
