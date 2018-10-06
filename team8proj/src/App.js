import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactInfo from'./ContactInfo';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        
        <form>
          <label>
            Name: <input type="text" name= "name"/>
          </label>
        </form>
        <ContactInfo name = "hello"/>
      </div>
      
    );
  }
}

export default App;
