import React from 'react';
import NavBar from './NavBar';
import Login from './Login';
import Feed from './Feed';
import PostForm from './PostForm';
import Post from './Post';

const App = () => {
  return (
    <div>
      <NavBar />
      <Login />
      <Feed />
      <PostForm />
      <Post />
    </div>
  );
}

export default App;