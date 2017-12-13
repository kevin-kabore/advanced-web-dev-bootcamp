import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <header className="navbar-container">
        <h2><a>Recipe App</a></h2>
        <nav className="navbar-li">
          <li><a>New Recipe</a></li>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact Us</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;
