import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MoonLoader from "react-spinners/MoonLoader";

import Post from "./Post";
import { fetchPosts } from "../actions";

const Feed = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <Post key={post.user_id + post.id} {...post} />;
        })
      ) : (
        <div className="loader">
          <MoonLoader size={100} />
        </div>
      )}
    </div>
  );
};

export default Feed;
