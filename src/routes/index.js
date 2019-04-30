import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Administrativo from "../pages/Administrativo";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/admin" component={Administrativo} />
  </Switch>
);

export default Routes;
