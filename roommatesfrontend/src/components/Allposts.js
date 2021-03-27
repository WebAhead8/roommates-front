import React from "react";
import "../App.css";
import fetchAllPosts, { fetchAddPost } from "../fetches/fetchAllPosts";

function AllPosts() {
  const [allPosts, setAllPosts] = React.useState([]);
  const [AddPost, setAddPost] = React.useState({ post: "", user_id: "3" });
  React.useEffect(() => {
    fetchAllPosts().then((data) => {
      setAllPosts(data);
    });
  }, []);

  function HandelClick() {
    fetchAddPost(AddPost);
  }

  return (
    <div>
      {allPosts.map((postData) => (
        <div>
          <ul>
            <li>{postData.post + "  -- name :" + postData.user_id}</li>
            <button>Delete Post</button>
          </ul>
        </div>
      ))}

      <input
        value={AddPost}
        onChange={(e) => setAddPost(e.target.value)}
        placeholder="Add your post here "
      ></input>
      <button type="submit" onClick={HandelClick}>
        Add Post
      </button>
    </div>
  );
}

export default AllPosts;
