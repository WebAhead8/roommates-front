const checkResponse = (response) => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

function getMyProfile(url, token) {
  return fetch(url, {
    headers: { authorization: `${token}` },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getProfile failed ${err}`);
    });
}

export default getMyProfile;
