import NavBar from "../src/components/NavBar";
import HomePage from "../src/pages/HomePage";
import Insert from "./pages/Insert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Route component={NavBar} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/insert" exact component={Insert} />
      </Switch>
    </Router>
  );
}

export default App;
