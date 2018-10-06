import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
// import ContactInfo from "./ContactInfo";
import Welcome from "./Components/Welcome";

createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  Contact: {
    screen: ContactInfo
  },
  Demagra: {
    screen: DemagraInfo
  },
  House: {
    screen: HouseholdInfo
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Welcome />
        {/* <ContactInfo /> */}
      </div>
    );
  }
}

export default App;
