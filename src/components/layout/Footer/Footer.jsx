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
    <div style={{ backgroundColor: "black", padding: "5% 0", color: "white" }}>
      <Container>
        <Row>
          <Col xs>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3>Politicas</h3>

              <Nav.Link as={Link} to="/privacy-policy">
                Privacidad y Condiciones
              </Nav.Link>
              <Nav.Link as={Link} to="/delivery-policy">
                Politicas de Envio
              </Nav.Link>
              <Nav.Link as={Link} to="/warranty-policy">
                Politicas de Garantia
              </Nav.Link>
            </div>
          </Col>
          <Col xs={{ order: 12 }}>
            <div>
              <h3>Suscribete:</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </div>
          </Col>
          <Col xs={{ order: 1 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3>Social:</h3>
              <a href="#">Facebook</a>
              <a href="#">Mercado Libre</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* newsletter form */}
    </div>
  );
}

export default Footer;
