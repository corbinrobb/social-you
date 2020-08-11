import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  };

  return (
    <nav>
      <h3>Social You</h3>
      <div className="nav-items">
        <Link to="/feed">Feed</Link>
        <Link to="/profile">Profile</Link>

        <Link onClick={logoutUser} to="/login">
          Log Out
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
