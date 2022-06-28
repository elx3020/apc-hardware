import { Link, useHistory } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";

import "./style.scss";
import logoImage from "../../../images/icons/apc_logo_nav.png";
import { Dropdown } from "react-bootstrap";

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
        Buscar
      </Button>
    </Form>
  );

  const navPanel = (
    <div className={`navpanel-wrapper ${navPanelState}`}>
      <div className="navpanel-content">
        <div>
          <span onClick={toggleNavPanel}>X</span>
        </div>
        <ul>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
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
        {searchBar}
        <div className="option-menu">
          <Link to={login}>Iniciar Sesion</Link>
          <Link to={contact}>Contacto</Link>
          <Link to={cart}>Carrito</Link>
        </div>
        <div className="mobile-nav-button" onClick={toggleNavPanel}>
          M
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
        {searchBar}
        <div className="option-menu">
          <NavDropdown menuVariant="dark" title="Usuario">
            <NavDropdown.Item as={Link} to="/profile/test">
              Perfil
            </NavDropdown.Item>
          </NavDropdown>
          <Link to={contact}>Contacto</Link>
          <Link to={cart}>Carrito</Link>
        </div>
        <div className="mobile-nav-button" onClick={toggleNavPanel}>
          M
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
