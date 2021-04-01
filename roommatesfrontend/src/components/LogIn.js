import React, { useState, useEffect } from "react";
import { login, getUser } from "../fetches/fetchUsers";
import Profile from "./MyProfile";
import { Redirect, Switch } from "react-router-dom";

function Login() {
  const [worrning, setWorrning] = useState("");
  const [loginData, setLoginData] = useState({ email: "", pass: "" });
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onChange = (stateKey) => ({ target }) =>
    setLoginData({ ...loginData, [stateKey]: target.value });

  const onSubmit = (event) => {
    event.preventDefault();

    login(loginData).then((data) => {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("username", data.user);

      setUser(data);
      setIsLoggedIn(true);
    });

    if (loginData.email && loginData.pass) {
      login(loginData).then((data) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.user);
        setUser(data);
        setIsLoggedIn(true);
      });
    } else {
      setWorrning("Empty fields are not allowed");
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("access_token");

    console.log("token ", token);
    if (token) {
      getUser(token)
        .then((data) => {
          console.log("The other data : ", data);
          setUser(data);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("access_token");

    setUser({});
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    window.location.reload();
    return (
      <Switch>
        <Profile user={user} />
      </Switch>
    );
  }
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <label className="textt"> Type Your Login Information </label>

        <input
          className="cont"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={onChange("email")}
          value={loginData.email}
        />

        <input
          className="cont"
          type="password"
          placeholder="Password"
          name="pass"
          id="pass"
          onChange={onChange("pass")}
          value={loginData.pass}
        />
        <i className="toto">
          {" "}
          Don't have an account? <a href="/signup">Sign Up</a>
        </i>
        <i className="error">{worrning}</i>
        <button
          type="submit"
          onClick={() => {
            window.location.href = `/`;
          }}
        >
          Login{" "}
        </button>
      </form>
    </div>
  );
}

export default Login;
