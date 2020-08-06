import React, { useState } from "react";
// import Comments from "./Comments";

const Post = (props) => {
  // const [showComments, setShowComments] = useState(false);

  const { contents, post_pic_url, posted_at } = props;

  return (
    <div className="post">
      <div>
        <span>
          <i className="user icon"></i>
        </span>
        {/* <h3>{name}</h3> */}
        <div>
          <img src={post_pic_url}></img>
        </div>
        <div>{contents}</div>
      </div>
      <div>
        <div>
          <span>{posted_at}</span>
        </div>
        {/* <i onClick={() => setShowComments(!showComments)}>Comments</i> */}
        <i className="heart outline icon right floated"></i>
      </div>
      {/* ADD COMMENTS FUNCTIONALITY AFTER SETTING UP IN THE BACKEND */}
      {/* <Comments /> */}
    </div>
  );
};

export default Post;
