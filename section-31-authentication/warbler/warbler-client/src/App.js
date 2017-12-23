import React, { Component } from 'react';
import Signup from './components/Signup';
import Signin from './components/Signin';
import './App.css';
import * as apiCalls from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.createUser = this.createUser.bind(this);
  }
  async createUser(user) {
    let newUser = await apiCalls.createUser(user);
  }
  async loginUser(userInfo) {
    let user = await apiCalls.login(userInfo);
    console.log(user);
  }

  render() {
    return (
      <div className="App">
        <Signup createUser={this.createUser} />
        <Signin loginUser={this.loginUser} />
      </div>
    );
  }
}

export default App;
