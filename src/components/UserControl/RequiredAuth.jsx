import { useLocation, Redirect } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

function RequiredAuth({ children }) {
  const location = useLocation();
  const { route } = useAuthenticator((context) => [context.route]);

  if (route !== "authenticated") {
    return (
      <Redirect
        to={{ pathname: "/iniciar-sesion", state: { from: location } }}
      />
    );
  }

  return children;
}

export default RequiredAuth;
