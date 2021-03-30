import React from "react";
import "../App.css";
import {
  fetchAllPosts,
  fetchAddPost,
  fetchDeletePost,
} from "../fetches/fetchAllPosts";

function AllPosts() {
  const [allPosts, setAllPosts] = React.useState([]);
  const [AddPost, setAddPost] = React.useState({ post: "", user_id: "3" });
  React.useEffect(() => {
    fetchAllPosts().then((data) => {
      setAllPosts(data);
    });
  }, []);

  function HandelClickAdd() {
    fetchAddPost(AddPost)
      .then(fetchAllPosts)
      .then((data) => {
        setAllPosts(data);
      });
  }
  function HandelChangeAdd(e) {
    setAddPost({ ...AddPost, post: e.target.value });
  }

  function HandelClickDelete(PostID) {
    fetchDeletePost(PostID)
      .then(fetchAllPosts)
      .then((data) => {
        setAllPosts(data);
      });
  }

  return (
    <div>
      {allPosts.map((postData) => (
        <div>
          <ul>
            <li>{postData.post + "  -- name :" + postData.user_id}</li>
            <button
              type="submit"
              onClick={() => {
                HandelClickDelete(postData.id);
              }}
            >
              Delete Post
            </button>
          </ul>
        </div>
      ))}

      <input
        value={AddPost.post}
        onChange={HandelChangeAdd}
        placeholder="Add your post here "
      ></input>
      <button type="submit" onClick={HandelClickAdd}>
        Add Post
      </button>
    </div>
  );
}

export default AllPosts;
