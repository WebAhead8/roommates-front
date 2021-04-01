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
  const token = window.localStorage.getItem("access_token");
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoxNiwiaWF0IjoxNjE3MjE0NjIxLCJleHAiOjE2MTcyMTgyMjF9.bH84dEatrh_-D0DpW_oiuq2X9bb5BDjSWZIxtiuiN6I";

  function HandelChangeAdding(event) {
    setComment(event.target.value);
  }
  async function HandelClickAdd() {
    const urlPostComment = `http://localhost:4000/comment`;
    await commentsFetch.postComment(
      urlPostComment,
      commentData,
      token,
      params.postId
    );
    await commentsFetch.getComments(urlGetComments).then((data) => {
      setUserName(data);
    });
  }

  async function HandelClickDelete(commentId) {
    const urlDelComment = `http://localhost:4000/comment/${commentId}`;
    await commentsFetch.deleteComment(urlDelComment, token);
    await commentsFetch.getComments(urlGetComments).then((data) => {
      setUserName(data);
    });
  }
  async function HandelClickUpdate(commentId) {
    const urlDelComment = `http://localhost:4000/comment/${commentId}`;
    await commentsFetch.updateComment(urlDelComment, token);
    await commentsFetch.getComments(urlGetComments).then((data) => {
      setUserName(data);
    });
  }
  React.useEffect(() => {
    commentsFetch.getComments(urlGetComments).then((data) => {
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
              <button
                onClick={() => {
                  HandelClickUpdate(data.id);
                }}
              >
                Update
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
