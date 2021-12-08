import React from 'react'
import { Redirect, Route } from "react-router-dom"; 

function PublicRoute({ component: component, restricted, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.setItem('token') && restricted ? (
          <Redirect to="/main" />
        ) : (  
          <component {...props} />
        )
      }
    />
  );
}


export default PublicRoute
