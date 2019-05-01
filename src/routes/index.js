import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Administrativo from "../pages/Administrativo";
import Relatorios from "../pages/Relatorios";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/admin" component={Administrativo} />
    <Route path="/report" component={Relatorios} />
  </Switch>
);

export default Routes;
