import React, { useState } from 'react';

const Post = (props) => {
  const [ showComments, setShowComments ] = useState(false);
  
  return (
    <div className="ui card" style={{ width: '60%', margin: '2% auto' }}>
      <div className="content">
        <span className="right floated"><i class="user icon"></i></span>
        <a className="header">{props.name}</a>
        <div class="ui fluid">
          <img class="image" src={props.image} style={{ maxWidth: '100%' }}></img>
        </div>
        <div className="description">
          {props.content}
        </div>
      </div>
      <div class="extra content">
        <div class="meta">
          <span class="date">{props.date}</span>
        </div>
        <i onClick={() => setShowComments(!showComments)} class="comment outline icon right floated"></i>
        <i class="heart outline icon right floated"></i>
      </div>
      <div className="ui comments content" style={{ display: (showComments) ? 'block' : 'none' }}>
        {props.comments.map(comment => {
          return (
            <div className="comment">
              <a className="avatar">
                <img src={comment.image} />
              </a>
              <div className="content">
                <a className="author">{comment.name} </a>
                <div className="metadata">
                  <span className="date">{comment.date}</span>
                </div>
                <div className="text">
                  {comment.content}
                </div>
                <div className="actions">
                  <a className="reply">Reply</a>
                </div>
              </div>
            </div>
          );
        })}
        <form className="ui reply form">
          <div className="field">
            <textarea></textarea>
          </div>
          <div className="ui blue labeled submit icon button">
            <i className="icon edit"></i> Add Reply
        </div>
        </form>
      </div>
    </div>
  );
}

export default Post;