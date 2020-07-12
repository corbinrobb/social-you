import React, { useState } from 'react';

const Post = (props) => {
  const [ showComments, setShowComments ] = useState(false);

  const { name, image, content, date, comments } = props;
  
  return (
    <div className="post">
      <div>
        <span><i class="user icon"></i></span>
        <h3>{name}</h3>
        <div>
          <img src={image} alt="People on bikes" ></img>
        </div>
        <div>
          {content}
        </div>
      </div>
      <div>
        <div>
          <span>{date}</span>
        </div>
        <i onClick={() => setShowComments(!showComments)}>Comments</i>
        <i class="heart outline icon right floated"></i>
      </div>
      <div style={{ display: (showComments) ? 'block' : 'none' }}>
        {comments.map(comment => {
          return (
            <div>
              <span>
                <img alt={`Headshot of ${comment.name}`} src={comment.image} />
              </span>
              <div>
                <span>{comment.name} </span>
                <div>
                  <span>{comment.date}</span>
                </div>
                <div>
                  {comment.content}
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