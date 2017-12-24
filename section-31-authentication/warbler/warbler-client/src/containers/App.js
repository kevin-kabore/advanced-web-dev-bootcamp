import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as action from '../actions';
import Main from './Main';
import Navbar from '../components/Navbar';
import '../styles/App.css';
// import * as apiCalls from '../api';

const App = ({ currentUser }) => (
  <div className="App">
    <Navbar />
    <Main />
  </div>
);

// class App extends Component {
//   constructor(props) {
//     super(props);
// this.createUser = this.createUser.bind(this);
// }
// async createUser(user) {
//   let newUser = await apiCalls.createUser(user);
// }
// async loginUser(userInfo) {
//   let user = await apiCalls.login(userInfo);
//   console.log(user);
// }
//
//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//         <Main />
//       </div>
//     );
//   }
// }
// <Signup createUser={this.createUser} />
// <Signin loginUser={this.loginUser} />

const mapStateToProps = state => ({
  currentUser: state.currentUser
});
export default withRouter(connect(mapStateToProps, null)(App));
