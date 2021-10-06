import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import Profile from "./components/User/User";
import ContactUs from "./components/ContactUs/ContactUs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Shop" exact component={Shop} />
        <Route path="/ContactUs" exact component={ContactUs} />
        <Route path="/Profile" exact component={Profile} />
        <Route render={() => <h1>404 Page not found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
