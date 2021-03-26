require("dotenv").config();
const checkResponse = (response) => {
  if (response.status !== 201) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }

  return response.json();
};

function fetchAllPosts() {
  return fetch(`http://localhost:4000/allposts`)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch fetchAllPosts failed ${err}`);
    });
}

// console.log("h22hh", fetchAllPosts());
export default fetchAllPosts;
