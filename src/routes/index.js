import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../layout/Login";
import App from "../layout/App";
import { isAuthenticated } from "../services/auth";

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
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
    <Route path="/login" component={Login} />
    <PrivateRoutes path="/app" component={App} />
    <Redirect from="/" to="/app" />
  </Switch>
);

export default Routes;
