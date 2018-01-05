import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as actions from '../actions';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Feed from '../components/Feed';
import MessageForm from '../components/MessageForm';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  handleNewMessage(text) {
    const { newMessage, history } = this.props;
    newMessage(text).then(() => {
      history.push('/');
    });
  }

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
          <Route
            exact
            path="/new-message"
            render={props => <MessageForm onSubmit={this.handleNewMessage} />}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  messages: state.messages,
  errorMessage: state.errorMessage
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSignin(authData) {
    return dispatch(actions.signin(authData));
  },
  handleSignup(authData) {
    return dispatch(actions.signup(authData));
  },
  newMessage(text) {
    return dispatch(actions.postNewMessage(text));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
