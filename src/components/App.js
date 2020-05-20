import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import Feed from './Feed';
import PostForm from './PostForm';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="ui container">
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/feed">
          <PostForm />
          <Feed />
        </Route>
      </div>
    </Router>
  );
}

export default App;