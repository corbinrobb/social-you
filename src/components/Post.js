import React from 'react';

const Post = () => {
  return (
    <div className="ui card fluid">
      <div className="content">
        <span className="right floated"><i class="user icon"></i></span>
        <a className="header">Name</a>
        <div class="ui placeholder fluid">
          <div class="image"></div>
        </div>
        <div className="description">
          It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.
        </div>
      </div>
      <div class="extra content">
        <div class="meta">
          <span class="date">Jan 23 2020</span>
        </div>
      </div>
    </div>
  );
}

export default Post;