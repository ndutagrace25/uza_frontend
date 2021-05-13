import React from "react";
import "./App.css";

import { Main } from "./components/customers";
import { Login, ResetPassword } from "./components/admin/auth";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/admin" component={Login} />
        <Route exact path="/admin/reset-password" component={ResetPassword} />
      </Switch>
    </Router>
  );
}

export default App;
