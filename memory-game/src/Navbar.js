import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header className="navbar-container">
        <h2 >Memory Game</h2>
        <nav className="navbar-list">
          <li><a>New Game</a></li>
        </nav>
      </header>
    )
  }
}

export default Navbar;
