import React from "react";

const Comments = ({ showComments, comments }) => {
  return (
    <div style={{ display: showComments ? "block" : "none" }}>
      {comments.map((comment) => {
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
              <div>{comment.content}</div>
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
  );
};

export default Comments;
