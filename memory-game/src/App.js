import React, { Component } from 'react';
import Navbar from './Navbar'
import Game from './Game'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Game />
      </div>
    );
  }
}

export default App;
