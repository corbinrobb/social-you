import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post';

const Feed = () => {
  const posts =  useSelector(state => state);
  
  return (
    <div>
      {posts.map(post => {
        return <Post {...post} />
      })}
    </div>
  );
}

export default Feed;