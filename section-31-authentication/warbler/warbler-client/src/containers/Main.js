import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as actions from '../actions';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Feed from '../components/Feed';
import MessageForm from '../components/MessageForm';

class Main extends Component {
  render() {
    const {
      // currentUser,
      authErrorMessage,
      handleSignin,
      handleSignup,
      history
    } = this.props;
    return (
      <div className="container">
        <Switch>
          <Route
            exact
            path="/signup"
            render={props => (
              <Signup
                onSignup={authInfo =>
                  handleSignup(authInfo).then(() => history.push('/'))}
                errorMessage={authErrorMessage}
              />
            )}
          />
          <Route
            exact
            path="/signin"
            render={props => (
              <Signin
                onSignin={authInfo =>
                  handleSignin(authInfo).then(() => history.push('/'))}
                errorMessage={authErrorMessage}
              />
            )}
          />
          <Route exact path="/" render={props => <Feed />} />
          <Route exact path="/new-message" render={props => <MessageForm />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  errorMessage: state.errorMessage
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSignin(authData) {
    return dispatch(actions.signin(authData));
  },
  handleSignup(authData) {
    return dispatch(actions.signup(authData));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
