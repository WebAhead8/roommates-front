import React from "react";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-links-li">
          <a href="/login">LogIn</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
