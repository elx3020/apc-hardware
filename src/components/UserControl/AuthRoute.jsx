import React from "react";
import { Redirect, Route } from "react-router-dom";

function AuthRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated !== "authenticated" ? (
          <Redirect to="/iniciar-sesion" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default AuthRoute;
