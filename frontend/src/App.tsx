import React from "react";
import NavBar from "../src/components/NavBar";
import HomePage from "../src/pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Route component={NavBar} />
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
