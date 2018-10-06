import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
// import ContactInfo from "./ContactInfo";
import Welcome from "./Components/Welcome";

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
