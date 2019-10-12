import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    age: "",
    occupation: "",
    company: "",
    description: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      age,
      occupation,
      company,
      description
    } = this.state;
    const values = {
      firstName,
      lastName,
      age,
      occupation,
      company,
      description
    };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            values={values}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            values={values}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <Confirm
            values={values}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return <Success />;
      default:
    }
  }
}

export default UserForm;
