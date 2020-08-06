import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitPost } from "../actions";

const postInitial = {
  post_pic_url: "",
  contents: "",
};

const PostForm = () => {
  const [post, setPost] = useState(postInitial);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitPost({ ...post, user_id: 1 }));
    setPost(postInitial);
  };

  return (
    <div className="post-form">
      <form onSubmit={handleSubmit}>
        <textarea
          name="contents"
          value={post.contents}
          onChange={handleChange}
        />
        <label>
          Enter post URL:
          <input
            name="post_pic_url"
            value={post.post_pic_url}
            onChange={handleChange}
          />
        </label>
        <button className="post-button">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
