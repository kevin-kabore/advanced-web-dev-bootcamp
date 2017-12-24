import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import Main from './Main';
import Navbar from '../components/Navbar';
import '../styles/App.css';
// import * as apiCalls from '../api';

const App = ({ currentUser, onLogout }) => (
  <div className="App">
    <Navbar currentUser={currentUser} onLogout={onLogout} />
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
const mapDispatchToProps = dispatch => ({
  onLogout() {
    dispatch(actions.userLogout());
  }
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
