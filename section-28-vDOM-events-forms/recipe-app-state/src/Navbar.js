import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
  static defaultProps = {
    onNewRecipe(){}
  }

  static propTypes = {
    onNewRecipe: PropTypes.func
  }

  render() {
    return (
      <header className="navbar-container">
        <h2><a>Recipe App</a></h2>
        <nav className="navbar-li">
          <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact Us</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;
