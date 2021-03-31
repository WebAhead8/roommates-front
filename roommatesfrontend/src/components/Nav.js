import React from "react";
// className="nav-links"className="nav-links-li"
function Nav() {
  return (
    <nav>
      <ul>
        <li>
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
