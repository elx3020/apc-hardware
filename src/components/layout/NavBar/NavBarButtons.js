import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function NavBarButtons() {
  return (
    <ButtonGroup variant="text" color="secondary">
      <Button>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </Button>
      <Button>
        <Link to="/contacto" style={{ textDecoration: "none" }}>
          Contactos
        </Link>
      </Button>
      <Button>
        <Link to="/iniciar-sesion" style={{ textDecoration: "none" }}>
          Iniciar Sesion
        </Link>
      </Button>
      <Button>
        <Link to="/sign-up" style={{ textDecoration: "none" }}>
          Registrate
        </Link>
      </Button>
      <Button>
        <Link to="/userTest/carrito" style={{ textDecoration: "none" }}>
          Carrito
        </Link>
      </Button>
    </ButtonGroup>
  );
}
