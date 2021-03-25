const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

function getAllProfiles(url) {
  return fetch(url)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getAllProfiles failed ${err}`);
    });
}

export default getAllProfiles;
