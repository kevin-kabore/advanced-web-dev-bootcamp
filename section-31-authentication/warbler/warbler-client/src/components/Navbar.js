import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="navbar-brand">
            <span>Warbler</span>
          </div>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
