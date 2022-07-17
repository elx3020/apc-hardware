import { Link, useHistory } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";

import "./style.scss";
import logoImage from "../../../images/icons/apc_logo_nav.png";
import { Dropdown } from "react-bootstrap";
// icons
import {
  searchIcon,
  menuBarsIcon,
  crossIcon,
} from "../../../images/svg/svgIcons";

const NavBar = (props) => {
  // state
  const [searchString, setSearchString] = useState("");
  const [navPanelState, setNavPanelState] = useState("close");
  // props
  const { authenticated, routesLinks } = props;
  const { home, login, contact, cart, perfil } = routesLinks;
  // authenticator
  const { signOut } = useAuthenticator((context) => [context.signOut]);
  const history = useHistory();

  // functions
  function logOut() {
    signOut();
    history.push("/");
  }

  function handleSearchBarSubmit(e) {
    e.preventDefault();
    if (searchString === "") return;

    history.push(`/${searchString}/results`);
  }

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  function toggleNavPanel() {
    if (navPanelState === "close") {
      setNavPanelState("open");
    } else {
      setNavPanelState("close");
    }
  }

  const searchBar = (
    <Form className="search-bar" onSubmit={handleSearchBarSubmit}>
      <FormControl
        type="search"
        placeholder="Buscar"
        className="me-2"
        aria-label="Buscar"
        onChange={handleChange}
      ></FormControl>
      <Button variant="outline-success" type="submit">
        <span> {searchIcon}</span>
      </Button>
    </Form>
  );

  const navPanel = (
    <div className={`navpanel-wrapper ${navPanelState}`}>
      <div className="navpanel-content">
        <div className="nav-panel-top">
          <span onClick={toggleNavPanel}>{menuBarsIcon}</span>

          <p>APC-EC Hardware</p>
        </div>
        <ul className="panel-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to={cart}>Carrito</Link>
          </li>
          <li>
            <Link to={login}>Iniciar Sesion</Link>
          </li>
          <li>
            {" "}
            <NavDropdown menuVariant="dark" title="Categorias">
              <NavDropdown.Item as={Link} to="#">
                Computadoras
              </NavDropdown.Item>
              <NavDropdown.Item>Ventiladores</NavDropdown.Item>
              <NavDropdown.Item>Memorias Ram</NavDropdown.Item>
              <NavDropdown.Item>Tarjetas Madres</NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </div>
    </div>
  );

  const guestNavBarContent = (
    <nav className="nav-bar">
      <div className={`navbar-wrapper ${navPanelState}`}></div>
      <div className="first-row">
        <div
          className="branding-img"
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={logoImage} alt="" />
        </div>
        <div className="mobile-nav-button" onClick={toggleNavPanel}>
          <span>{menuBarsIcon}</span>
        </div>
        {searchBar}
        <div className="option-menu">
          <Link to={login}>Iniciar Sesion</Link>
          <Link to={contact}>Contacto</Link>
          <Link to={cart}>Carrito</Link>
        </div>
      </div>
      <div className="categories-row">
        <div className="scroll-content">
          <p>Computadoras</p>
          <p>Procesadores</p>
          <p>Tarjetas Graficas</p>
          <p>Memorias Rams</p>
          <p>Fuentes de Poder</p>
        </div>
      </div>
      {navPanel}
    </nav>
  );

  const authenticatedNavBarContent = (
    <nav className="nav-bar">
      <div className={`navbar-wrapper ${navPanelState}`}></div>
      <div className="first-row">
        <div
          className="branding-img"
          onClick={() => {
            history.push("/");
          }}
        >
          <img src={logoImage} alt="" />
        </div>
        <div className="mobile-nav-button" onClick={toggleNavPanel}>
          <span>{menuBarsIcon}</span>
        </div>
        {searchBar}
        <div className="option-menu">
          <NavDropdown menuVariant="dark" title="Usuario">
            <NavDropdown.Item as={Link} to="/profile/test">
              Perfil
            </NavDropdown.Item>
            <NavDropdown.Item onClick={logOut}>Cerrar Sesion</NavDropdown.Item>
          </NavDropdown>
          <Link to={contact}>Contacto</Link>
          <Link to={cart}>Carrito</Link>
        </div>
      </div>
      <div className="categories-row">
        <div className="scroll-content">
          <p>Computadoras</p>
          <p>Procesadores</p>
          <p>Tarjetas Graficas</p>
          <p>Memorias Rams</p>
          <p>Fuentes de Poder</p>
        </div>
      </div>
      {navPanel}
    </nav>
  );

  const navBarContent =
    authenticated === "authenticated"
      ? authenticatedNavBarContent
      : guestNavBarContent;

  return navBarContent;
};

export default NavBar;
