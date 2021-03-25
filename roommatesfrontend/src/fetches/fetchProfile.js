const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

function getProfile(url) {
  return fetch(url)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getProfile failed ${err}`);
    });
}

export default getProfile;
