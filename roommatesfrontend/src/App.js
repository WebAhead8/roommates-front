import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Allposts from "./components/Allposts";
import AllProfiles from "./components/AllProfiles";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import MyProfile from "./components/MyProfile";
import Comments from "./components/Comments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/allposts" component={Allposts} />
          <Route path="/allprofiles" component={AllProfiles} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/myprofile" component={MyProfile} />
          <Route path="/comments" component={Comments} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
