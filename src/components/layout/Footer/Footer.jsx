import React from "react";

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div className="footer-container">
      <Container>
        <Row>
          <Col xs>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3>Politicas</h3>

              <ul>
                <li>
                  <Nav.Link as={Link} to="/privacy-policy">
                    Privacidad y Condiciones
                  </Nav.Link>
                </li>

                <li>
                  <Nav.Link as={Link} to="/delivery-policy">
                    Politicas de Envio
                  </Nav.Link>
                </li>

                <li>
                  <Nav.Link as={Link} to="/warranty-policy">
                    Politicas de Garantia
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={{ order: 12 }}>
            <div>
              <h3>Suscribete:</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Unete para recibir promociones y notificaciones.
                  </Form.Text>
                </Form.Group>

                <Button variant="success" type="submit">
                  Enviar
                </Button>
              </Form>
            </div>
          </Col>
          <Col xs={{ order: 1 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3>Social:</h3>
              <ul>
                <li>
                  <a href="https://www.facebook.com/APCHARDWAREC">Facebook</a>
                </li>
                <li>
                  <a href="https://www.mercadolibre.com.ec/perfil/APC+HARDWARE-UIO">
                    Mercado Libre
                  </a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Row>
        <p>&copy; APCEC . Todos los derechos 2022 </p>
      </Row>
    </div>
  );
}

export default Footer;
