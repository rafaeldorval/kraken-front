import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Administrativo from "../pages/Administrativo";
import Relatorios from "../pages/Relatorios";
import { isAuthenticated } from "../services/auth";

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <PrivateRoutes exact path="/app" component={Home} />
    <PrivateRoutes path="/app/admin" component={Administrativo} />
    <PrivateRoutes path="/app/report" component={Relatorios} />
  </Switch>
);

export default Routes;
