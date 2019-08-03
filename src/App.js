import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Wizard from "./components/Wizard/Wizard";
import { Route, Switch, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route  path="/wizard" component={Wizard} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
