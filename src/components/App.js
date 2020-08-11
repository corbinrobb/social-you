import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import Feed from "./Feed";
import PostForm from "./PostForm";
import SignUp from "./SignUp";
import Landing from "./Landing";

const App = () => {
  const { push } = useHistory();

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");

    if (user_id) {
      push("/feed");
    }
  }, [push]);

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
        <Route path="/feed">
          <PostForm />
          <Feed />
        </Route>
      </main>
    </>
  );
};

export default App;
