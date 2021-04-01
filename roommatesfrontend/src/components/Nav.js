import React from "react";
// className="nav-links"className="nav-links-li"
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/allposts">All Posts</a>
        </li>
        <li>
          <a href="/allprofiles">All Profiles</a>
        </li>
        <li>
          <a href="/find">Find Roommates</a>
        </li>
        <li>
          <a href="/myprofile">My Profile</a>
        </li>
        <li>
          <a href="/login">LogIn</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
