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

function updateMyProfile(url, myprofile, token) {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      myprofile,
    }),
    headers: {
      "content-type": "application/json",
      authorization: `${token}`,
    },
  })
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch updateData failed ${err}`);
    });
}

function getMyTraits(url) {
  return fetch(
    url
    //   {
    //   headers: {
    //     authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoyMiwiaWF0IjoxNjE3MTA0NzMyLCJleHAiOjE2MTcxMDgzMzJ9.M47SJCBrxeXjZOdYEZ2dVoinW2zs75vpqW-KRKSuDC8",
    //   },
    // }
  )
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetch getMyTraits failed ${err}`);
    });
}

export default { getMyProfile, updateMyProfile, getMyTraits };
