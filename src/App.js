import React from "react";
import "./App.css";

import { Main } from "./components/customers";
import { Login, ResetPassword } from "./components/admin/auth";
import { Menu } from "./components/admin/menu";
import { Categories } from "./components/admin/categories";
import Requests from "./components/admin/requests/Requests";

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
        <Route exact path="/admin/menu" component={Menu} />
        <Route exact path="/admin/category" component={Categories} />
        <Route exact path="/admin/requests" component={Requests} />
      </Switch>
    </Router>
  );
}

export default App;
