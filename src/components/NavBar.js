import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="ui secondary pointing menu">
      <h3 className="item">Social You</h3>
      <div className="right menu">
        <Link to="/feed" className="item">Feed</Link>
        <Link to="/profile" className="item">Profile</Link>
        <Link to="/" className="item">Log Out</Link>
      </div>
    </nav>
  );
}

export default NavBar;