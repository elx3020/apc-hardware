import { Link, useHistory } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";

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
const NavBar = (props) => {
  // state
  const [searchString, setSearchString] = useState("");

  // props
  const { authenticated } = props;

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

  const guestNavBarContent = (
    <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
      <Container className="flex-column">
        <div className="first-row">
          <Navbar.Brand as={Link} to="/">
            <div className="img-logo">
              <img src={logoImage} alt="apc-logo" />
            </div>
          </Navbar.Brand>

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
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/iniciar-sesion">
              Iniciar Sesion
            </Nav.Link>

            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>

            <Nav.Link as={Link} to="/userTest/carrito">
              Carrito
            </Nav.Link>
          </Nav>
        </div>
        <Row>
          <Nav>
            <Nav.Link href="#">Computadoras</Nav.Link>
            <Nav.Link href="#">Procesadores</Nav.Link>
            <Nav.Link href="#">Fuentes de Poder</Nav.Link>
            <Nav.Link href="#">Memorias Ram</Nav.Link>
          </Nav>
        </Row>
      </Container>
    </Navbar>
  );

  const authenticatedNavBarContent = (
    <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
      <Container className="flex-column">
        <div className="first-row">
          <Navbar.Brand as={Link} to="/">
            <div className="img-logo">
              <img src={logoImage} alt="apc-logo" />
            </div>
          </Navbar.Brand>

          <Form className="search-bar" onSubmit={handleSearchBarSubmit}>
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Buscar"
            ></FormControl>
            <Button variant="outline-success" type="submit">
              Buscar
            </Button>
          </Form>
          <Nav className="justify-content-end">
            <NavDropdown title="Usuario">
              <NavDropdown.Item as={Link} to="/profile/testUser">
                Perfil
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/testUser/orders">
                Ordenes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/testUser/tickets">
                Tickets
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link onClick={logOut}>Salir</Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>

            <Nav.Link as={Link} to="/userTest/carrito">
              Carrito
            </Nav.Link>
          </Nav>
        </div>
        <Row>
          <Nav>
            <Nav.Link href="#">Computadoras</Nav.Link>
            <Nav.Link href="#">Procesadores</Nav.Link>
            <Nav.Link href="#">Fuentes de Poder</Nav.Link>
            <Nav.Link href="#">Memorias Ram</Nav.Link>
          </Nav>
        </Row>
      </Container>
    </Navbar>
  );

  const navBarContent =
    authenticated === "authenticated"
      ? authenticatedNavBarContent
      : guestNavBarContent;

  return navBarContent;
};

export default NavBar;
