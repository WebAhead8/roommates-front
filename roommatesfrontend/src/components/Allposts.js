import React from "react";
import fetchAllPosts from "../fetches/fetchAllPosts";

function AllPosts() {
  const [allPosts, setAllPosts] = React.useState([]);
  React.useEffect(() => {
    fetchAllPosts().then((data) => {
      setAllPosts(data);
    });
  }, []);
  return allPosts.map((postData) => (
    <div>
      <ul>
        <li>{postData.post + "  -- name :" + postData.user_id}</li>
      </ul>
    </div>
  ));
}

export default AllPosts;
