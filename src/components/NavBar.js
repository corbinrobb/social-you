import React from 'react';

const NavBar = () => {
  return (
    <nav className="ui secondary pointing menu">
      <h3 className="item">Social You</h3>
      <div className="right menu">
        <a href="#" className="item">Feed</a>
        <a href="#" className="item">Profile</a>
        <a href="#" className="item">Log Out</a>
      </div>
    </nav>
  );
}

export default NavBar;