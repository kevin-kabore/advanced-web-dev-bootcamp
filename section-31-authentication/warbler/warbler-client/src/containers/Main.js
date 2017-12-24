import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as actions from '../actions';
import Signup from '../components/Signup';
import Signin from '../components/Signin';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      currentUser,
      authErrorMessage,
      handleSignin,
      handleSignup
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
                  handleSignup(authInfo).then(user => console.log(user))}
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
                  handleSignin(authInfo).then(user => console.log(user))}
                errorMessage={authErrorMessage}
              />
            )}
          />
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
