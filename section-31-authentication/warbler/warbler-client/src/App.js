import React, { Component } from 'react';
import Signup from './components/Signup';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCreateUser = this.handleCreateUser.bind(this);
  }
  handleCreateUser(user) {}
  render() {
    return (
      <div className="App">
        <Signup createUser={this.handleCreateUser} />
      </div>
    );
  }
}

export default App;
