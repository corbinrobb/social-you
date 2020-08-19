import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Feed from "./Feed";
import PostForm from "./PostForm";
import SignUp from "./SignUp";
import Landing from "./Landing";
import PrivateRoute from "./PrivateRoute";
import { loginUser } from "../actions";
import { useDispatch } from "react-redux";

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
