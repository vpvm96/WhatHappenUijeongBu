import React from 'react'
import { Redirect, Route } from "react-router-dom"; 

function PublicRoute({ component: component, restricted, ...rest }) {
  const TOKEN = process.env.REACT_APP_BASE_URL;
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.setItem(TOKEN) && restricted ? (
          <Redirect to="/main" />
        ) : (  
          <component {...props} />
        )
      }
    />
  );
}


export default PublicRoute
