import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import submitPost from '../actions';

const PostForm = () => {
  const [ post, setPost ] = useState({
    name: 'Chad Chadley',
    image: '',
    content: '',
    date: '',
    comments: [],
  })
  const dispatch = useDispatch();

  const handleChange = e => {
    setPost({...post, [e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_POST', payload: {...post, date: Date.now()}})
    setPost({
      name: 'Chad Chadley',
      image: '',
      content: '',
      date: '',
      comments: [],
    });
  }

  return (
    <div className="post-form">
      <form onSubmit={handleSubmit} >
        <textarea 
          name="content"
          value={post.content}
          onChange={handleChange}
        />
        <button>Post</button>
      </form>
    </div>
  );
}

export default PostForm;