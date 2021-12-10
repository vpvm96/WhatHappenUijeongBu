import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: component, ...rest }) {
  const TOKEN = process.env.REACT_APP_BASE_URL;
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.setItem(TOKEN) ? (
          <component {...props} />
        ) : (
          <Redirect to = "/" />
        )
      }
    />
  );
}

export default PrivateRoute;