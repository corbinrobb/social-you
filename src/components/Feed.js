import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Post from "./Post";
import { fetchPosts } from "../actions";

const Feed = () => {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => {
        return <Post key={post.user_id + post.id} {...post} />;
      })}
    </div>
  );
};

export default Feed;
