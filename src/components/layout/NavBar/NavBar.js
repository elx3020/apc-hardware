import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/contacto" style={{ textDecoration: "none" }}>
        Contactos
      </Link>
      <Link to="/iniciar-sesion" style={{ textDecoration: "none" }}>
        Iniciar Sesion
      </Link>
      <Link to="/sign-up" style={{ textDecoration: "none" }}>
        Registrate
      </Link>
      <Link to="/userTest/carrito" style={{ textDecoration: "none" }}>
        Carrito
      </Link>
    </div>
  );
};

export default NavBar;
