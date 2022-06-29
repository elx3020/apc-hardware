import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";

function AdminPage() {
  return (
    <Container style={{ padding: "2vw 0" }}>
      <h2>Selecciona una opcion:</h2>
      <CardGroup>
        <Card style={{ maxWidth: "300px" }}>
          <Card.Header>Crear Producto</Card.Header>
          <Card.Body>
            <Card.Link as={Link} to="/admin-apcec/crear-producto">
              Crear Producto
            </Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Inventario</Card.Header>
          <Card.Body>
            <Card.Link as={Link} to="/admin-apcec/inventario">
              Inventario
            </Card.Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Crear Noticias</Card.Header>
          <Card.Body>
            <Card.Link as={Link} to="admin-apcec/crear-noticia">
              Crear Noticias
            </Card.Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default AdminPage;
