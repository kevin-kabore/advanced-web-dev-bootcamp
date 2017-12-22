import React, { Component } from 'react';
import '../styles/Signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      image: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="signup-component">
        <h1>Join Warbler today.</h1>
        <form onSubmit={this.props.createUser}>
          <label>
            Email
            <input type="email" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Username
            <input type="text" name="username" onChange={this.handleChange} />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Image Url
            <input type="text" name="image" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
