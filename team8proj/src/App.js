import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import { Link, Route } from "react-router-dom";
import ContactInfo from "./ContactInfo";
import Welcome from "./Components/Welcome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/ContactInfo">ContactInfo</Link>

        <Route path="/" component={Welcome} />
        <Route path="/ContactInfo" component={ContactInfo} />
      </div>
      // <div>
      //   <Welcome />
      // </div>
    );
  }
}

export default App;
