function request(url, options) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      const error = new Error("HTTP Error");
      error.status = response.status;
      throw error;
    } else {
      return response.json();
    }
  });
}

export function login(loginData) {
  return request("http://localhost:4000/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: { "content-type": "application/json" },
  });
}

export function getUser(token) {
  return request("http://localhost:4000/login/me", {
    headers: { authorization: `${token}` },
  });
}

export default { login, getUser };
