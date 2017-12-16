import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader.js';
import ChoiceForm from './ChoiceForm';
import Flag from './Flag';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      flags: []
    }
  }

  componentDidMount(){
    const allFlagsUrl = 'https://restcountries.eu/rest/v2/all'
    fetch(allFlagsUrl)
      .then(data => data.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <ChoiceForm />
        <Flag />
      </div>
    );
  }
}

export default App;
