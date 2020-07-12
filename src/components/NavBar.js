import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <h3>Social You</h3>
      <div className="nav-items">
        <Link to="/feed">Feed</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/">Log Out</Link>
      </div>
    </nav>
  );
}

export default NavBar;