import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import AllPosts from "./components/Allposts";
import AllProfiles from "./components/AllProfiles";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import SignUp2 from "./components/SignUp2";

import MyProfile from "./components/MyProfile";
import Comments from "./components/Comments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/allposts" component={AllPosts} />
          <Route path="/allprofiles" component={AllProfiles} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signup2" component={SignUp2} />
          <Route path="/myprofile" component={MyProfile} />
          <Route path="/comments" component={Comments} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
