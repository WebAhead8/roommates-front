require("dotenv").config();

const url = `http://localhost:4000/users`;
const checkResponse = (response) => {
  if (response.status !== 201) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

function postUsers(userData) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getData failed ${err}`);
    });
}

export default postUsers;
