import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <h2>Recipe App</h2>
        <ul className="navbar-li">
          <li>New Recipe</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
