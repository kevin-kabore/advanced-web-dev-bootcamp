import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = ({onNewGame}) => {
  return (
    <header className="navbar-container">
      <h2 >Memory Game</h2>
      <nav className="navbar-list">
        <li><a onClick={() => onNewGame()}>New Game</a></li>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  onNewGame: PropTypes.func.isRequired
}

export default Navbar;
