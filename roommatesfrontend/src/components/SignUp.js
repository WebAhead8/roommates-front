import React, { useState } from "react";
import "../style/SignUp.css";
// import postUsers from "../fetches/fetchSignUp.js";

function SignUp() {
  const [signup, setSignup] = React.useState({
    username: "",
    pass: "",
    user_pass: "",
    email: "",
  });
  const [worrning, setWorrning] = React.useState("");

  console.log(signup);

  function handelClick(e) {
    e.preventDefault();

    if (signup.user_pass2 == signup.pass) {
      setWorrning("");

      // postUsers(signup);
      localStorage.setItem(
        "signup",
        JSON.stringify({
          username: signup.username,
          pass: signup.pass,
          email: signup.email,
        })
      );
      alert("Thank You For Joining Us");
      window.location.href = "/SignUp2";
    } else {
      setWorrning("Password does not match");
    }
  }

  function handelChange(event) {
    const { name, value } = event.target;

    setSignup((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="cont">
      <form onSubmit={handelClick} className="form">
        <h1>Sign Up</h1>
        <input
          className="cont"
          type="text"
          placeholder="username"
          name="username"
          minlength="3"
          maxlength="20"
          onChange={handelChange}
          required
        />

        <input
          className="cont"
          type="email"
          placeholder="Email"
          onChange={handelChange}
          name="email"
          required
        />

        <input
          className="cont"
          type="password"
          placeholder="Password"
          name="pass"
          onChange={handelChange}
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
        />

        <input
          className="cont"
          type="password"
          placeholder="Confirm Password"
          name="user_pass2"
          onChange={handelChange}
          required
        />

        <i className="toto">
          {} Already have an account? <a href="/login"> Login </a>{" "}
        </i>
        <output className="error">{worrning}</output>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default SignUp;
