import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import { Link, Route } from "react-router-dom";
import ContactInfo from "./Components/ContactInfo";
import Welcome from "./Components/Welcome";
import DemagraInfo from "./Components/DemagraInfo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route path="/" component={Welcome} />
        <Route path="/ContactInfo" component={ContactInfo} />
        <Route path="/DemagraInfo" component={DemagraInfo} />
      </div>
    );
  }
}

export default App;
