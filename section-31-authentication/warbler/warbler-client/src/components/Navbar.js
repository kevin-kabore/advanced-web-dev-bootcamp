import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const { currentUser, onLogout } = props;
  return (
    <div className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="navbar-brand">
            <span>Warbler</span>
          </div>
        </div>
        <ul className="nav navbar-nav navbar-right">
          {currentUser
            ? [
                <li key="1">
                  <Link to="/new-message">New Message</Link>
                </li>,
                <li key="2">
                  <Link to="/signin" onClick={onLogout}>
                    Log out
                  </Link>
                </li>
              ]
            : [
                <li key="3">
                  <Link to="/signup">Sign up</Link>
                </li>,
                <li key="4">
                  <Link to="/signin">Sign in</Link>
                </li>
              ]}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
