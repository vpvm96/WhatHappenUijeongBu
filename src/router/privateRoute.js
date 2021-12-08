import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.setItem('token') ? (
          <component {...props} />
        ) : (
          <Redirect to = "/" />
        )
      }
    />
  );
}

export default PrivateRoute;