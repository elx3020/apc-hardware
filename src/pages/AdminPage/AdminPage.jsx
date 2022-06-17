import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ProductTemplate from "../../components/products/ProductTemplate";
import { CardGroup } from "react-bootstrap";

function AdminPage() {
  return (
    <Container style={{ padding: "2vw 0" }}>
      <h2>Selecciona una opcion:</h2>
      <Card style={{ maxWidth: "300px" }}>
        <Card.Header>Crear Producto</Card.Header>
        <Card.Body>
          <Card.Link as={Link} to="/admin/crear-producto">
            Crear Producto
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AdminPage;
