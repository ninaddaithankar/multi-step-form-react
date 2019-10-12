import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import List, { ListItem } from "material-ui/List";

export class Confirm extends Component {
  render() {
    const { values } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Confirm Your Details' />
          <List>
            <ListItem
              primaryText='First Name'
              secondaryText={values.firstName}
            />
            <ListItem primaryText='Last Name' secondaryText={values.lastName} />
            <ListItem primaryText='Age' secondaryText={values.age} />
            <ListItem primaryText='Job' secondaryText={values.occupation} />
            <ListItem
              primaryText='Description'
              secondaryText={values.description}
            />
            <ListItem primaryText='Company' secondaryText={values.company} />
          </List>
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

export default Confirm;
