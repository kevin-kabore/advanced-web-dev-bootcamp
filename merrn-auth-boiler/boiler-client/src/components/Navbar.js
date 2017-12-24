import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const { currentUser, onLogout } = props;
  return (
    <div className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="navbar-brand">
            <span>Boiler</span>
          </div>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
            <Link to="/signin" onClick={onLogout}>
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
