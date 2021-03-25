import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Allposts from "./components/Allposts";
import Allprofiles from "./components/Allprofiles";
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
          <Route path="/" exact components={Home} />
          <Route path="/about" components={About} />
          <Route path="/allposts" components={Allposts} />
          <Route path="/allprofiles" components={Allprofiles} />
          <Route path="/login" components={LogIn} />
          <Route path="/signup" components={SignUp} />
          <Route path="/myprofile" components={MyProfile} />
          <Route path="/comments" components={Comments} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
