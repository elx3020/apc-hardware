import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import { NavItem } from "react-bootstrap";

import "./style.scss";

const NavBar = (props) => {
  return (
    <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
      <Container className="flex-column">
        <div className="first-row">
          <Navbar.Brand as={Link} to="/">
            APC-Hardware
          </Navbar.Brand>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Buscar"
            ></FormControl>
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <Nav className="justify-content-end">
            <NavDropdown title="Iniciar Sesion">
              <NavDropdown.Item as={Link} to="/iniciar-sesion">
                Iniciar Sesion
              </NavDropdown.Item>
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

            <Nav.Link as={Link} to="/sign-up">
              Registrate
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
};

export default NavBar;
