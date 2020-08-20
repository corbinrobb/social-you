import React from "react";
// import Comments from "./Comments";

const Post = (props) => {
  // const [showComments, setShowComments] = useState(false);

  const { contents, post_pic_url, posted_at, username } = props;

  const formatDate = (dateInfo) => {
    const [yearMonthDay] = dateInfo.split("T");
    const [year, month, day] = yearMonthDay.split("-");

    const newDateInfo = new Date(+year, +month - 1, +day);

    return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
      newDateInfo
    );
  };

  return (
    <div className="post">
      <div>
        <span>
          <i className="user icon"></i>
        </span>
        <h3>{username}</h3>
        <div>
          <img src={post_pic_url}></img>
        </div>
        <div>{contents}</div>
      </div>
      <div>
        <div>
          <span>{formatDate(posted_at)}</span>
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
