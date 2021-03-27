import React from "react";
// import {
//   getComments,
//   postComment,
//   deleteComment,
// } from "../fetches/fetchComments";
// import postComment from "../fetches/fetchComments";
// import getComments from "../fetches/fetchComments";
import commentsFetch from "../fetches/fetchComments";

import { useParams } from "react-router-dom";
// import getUserName from "../fetches/fetchProfile";

function Comments() {
  const [commentData, setComment] = React.useState("");
  const [userNameData, setUserName] = React.useState([]);

  const params = useParams();
  const urlGetComments = `http://localhost:4000/comments/${params.postId}`;
  // const token = window.localStorage.getItem("access_token");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoyLCJpYXQiOjE2MTY4NTk3OTMsImV4cCI6MTYxNjg2MzM5M30.H2HqxkxfZsC5lvmKWwDVKBO_WP1eAj5nuW4qpZm3yqw";

  function HandelChangeAdding(event) {
    setComment(event.target.value);
  }
  function HandelClickAdd() {
    const urlPostComment = `http://localhost:4000/comment`;
    commentsFetch.postComment(
      urlPostComment,
      commentData,
      token,
      params.postId
    );
    commentsFetch.getComments(urlGetComments).then((data) => {
      setUserName(data);
    });
  }

  function HandelClickDelete(commentId) {
    const urlDelComment = `http://localhost:4000/comment/${commentId}`;
    commentsFetch.deleteComment(urlDelComment, token);
    commentsFetch.getComments(urlGetComments).then((data) => {
      setUserName(data);
    });
  }

  React.useEffect(() => {
    commentsFetch.getComments(urlGetComments).then((data) => {
      console.log(data);
      setUserName(data);
    });
  }, []);

  return (
    <div>
      <label> Comments </label>
      <div>
        <ul>
          {userNameData.map((data) => (
            <li>
              {data.username}:{data.comment}
              <button
                onClick={() => {
                  HandelClickDelete(data.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="insert you comment here"
          onChange={HandelChangeAdding}
          value={commentData}
          required
        ></input>

        <button type="submit" onClick={HandelClickAdd}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Comments;
