import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ContactInfo from'./ContactInfo';

createStackNavigator({
// For each screen that you can navigate to, create a new entry like this:
Contact: {
  screen: ContactInfo,
}, Demagra: {
  screen: DemagraInfo,
}, House: {
  screen: HouseholdInfo,
},

});

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

class HomeScreen extends React.Component {
  //<Navigator nextP={{name: 'Next page', component: DemagraInfo}}>
  constructor(props){
      super(props)
      this.home = this.home.bind(this)
  }
  //this.props.navigation.push(nextP)
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Next page</Text>
        <Button
          title="Next page"
          onPress={() => this.props.navigation.navigate('Contact')}
        />
      </View>
    );
  }
}

export default App;
