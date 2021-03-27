require("dotenv").config();

// ------ check if the response contain data or not --- if not send error
const checkResponse = (response) => {
  if (response.status !== 201) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }

  return response.json();
};
// --------------------- fetch all the posts -------------------
function fetchAllPosts() {
  return fetch(`http://localhost:4000/allposts`)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch fetchAllPosts failed ${err}`);
    });
}
// console.log("h22hh", fetchAllPosts());

// ---------------------  allow the user to POST (add) a post -------------------

function fetchAddPost(AddPost) {
  return fetch(`http://localhost:4000/post`, {
    method: "POST",
    body: JSON.stringify(AddPost),
    headers: { "content-type": "application/json" },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch fetchAllPosts failed ${err}`);
    });
}

export { fetchAddPost, fetchAllPosts };
