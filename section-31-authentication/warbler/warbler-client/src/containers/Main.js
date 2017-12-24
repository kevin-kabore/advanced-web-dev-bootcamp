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
    const { currentUser, authErrorMessage, handleSignin } = this.props;
    return (
      <div className="container">
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/signin"
            render={props => (
              <Signin
                onSignin={authInfo =>
                  handleSignin(authInfo).then(user => console.log(user))}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSignin(authData) {
    return dispatch(actions.signin(authData));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
