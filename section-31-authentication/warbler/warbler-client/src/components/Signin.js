import React, { Component } from 'react';
import '../styles/signin.css';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSignin(this.state);
  }
  render() {
    return (
      <div className="signin-component">
        <h1>Welcome Back.</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            E-mail
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

export default Signin;
