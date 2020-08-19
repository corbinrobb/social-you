import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions";

const NavBar = () => {
  const { loggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const toggleLoggedIn = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    dispatch(logoutUser());
  };

  return (
    <nav>
      <h3>Social You</h3>
      <div className="nav-items">
        <Link to="/feed">Feed</Link>
        <Link to="/profile">Profile</Link>
        <Link onClick={toggleLoggedIn} to="/login">
          {loggedIn ? "Log Out" : "Log In"}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
