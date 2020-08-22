import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "./components/Nav/NavBar";
import Login from "./components/LoginSignup/Login";
import Feed from "./components/Feed/Feed";
import PostForm from "./components/Feed/PostForm";
import SignUp from "./components/LoginSignup/SignUp";
import Landing from "./components/Landing";
import PrivateRoute from "./components/PrivateRoute";
import { loginUser } from "./actions";

const App = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");

    if (user_id) {
      dispatch(loginUser(user_id));
      push("/feed");
    }
  }, [push, dispatch]);

  return (
    <>
      <NavBar />
      <main>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <PrivateRoute path="/feed">
          <PostForm />
          <Feed />
        </PrivateRoute>
      </main>
    </>
  );
};

export default App;
