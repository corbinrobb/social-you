import React, { useState } from 'react';

const Post = (props) => {
  const [ showComments, setShowComments ] = useState(false);

  const { name, image, content, date, comments } = props;
  
  return (
    <div className="post">
      <div>
        <span><i class="user icon"></i></span>
        <a>{name}</a>
        <div>
          <img src={image} style={{ maxWidth: '100%' }}></img>
        </div>
        <div>
          {content}
        </div>
      </div>
      <div>
        <div>
          <span>{date}</span>
        </div>
        <i onClick={() => setShowComments(!showComments)} class="comment outline icon right floated">Comments</i>
        <i class="heart outline icon right floated"></i>
      </div>
      <div style={{ display: (showComments) ? 'block' : 'none' }}>
        {comments.map(comment => {
          return (
            <div>
              <a>
                <img src={comment.image} />
              </a>
              <div>
                <a>{comment.name} </a>
                <div>
                  <span>{comment.date}</span>
                </div>
                <div>
                  {comment.content}
                </div>
                <div>
                  <a>Reply</a>
                </div>
              </div>
            </div>
          );
        })}
        <form>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <i className="icon edit"></i> Add Reply
        </div>
        </form>
      </div>
    </div>
  );
}

export default Post;