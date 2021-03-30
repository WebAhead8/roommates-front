const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};
// // --------------------Get all the Comments function------>
function getComments(url) {
  return fetch(url)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
}

// // --------------------Post Comments function------>
function postComment(url, addComment, token, postId) {
  return fetch(url, {
    method: "POST",
    // cmm.comment, cmm.user_id, cmm.prod_id
    body: JSON.stringify({
      comment: addComment,
      post_id: postId,
    }),
    headers: {
      "Content-type": "application/json",
      authorization: `${token}`,
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch postData failed ${err}`);
    });
}

// --------------------Delete Comments function------>
function deleteComment(url, token) {
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `${token}`,
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch deleteData failed ${err}`);
    });
}
function updateComment(url, token) {
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      authorization: `${token}`,
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch deleteData failed ${err}`);
    });
}

export default { getComments, postComment, deleteComment, updateComment };
