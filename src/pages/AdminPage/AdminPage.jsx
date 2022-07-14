import React from "react";
import { Link, useHistory } from "react-router-dom";
import GoToTop from "../../components/utils/GoToTop";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AdminPage() {
  const history = useHistory();

  return (
    <Container style={{ padding: "5vw 0" }}>
      <h1 style={{ marginBottom: "20px" }}>Panel de Administracion</h1>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Header>
              <h3>Administrar Productos</h3>
            </Card.Header>
            <Card.Body>
              Crea, edita o elimina los productos de tu tienda.
            </Card.Body>
            <Card.Footer as={Link} to="/admin-apcec/inventario">
              <b>Ir a Inventario de Productos </b>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Header>
              <h3>Administrar Noticias</h3>
            </Card.Header>
            <Card.Body>
              Crea, edita o elimina las noticias de tu tienda.
            </Card.Body>
            <Card.Footer>
              <Link to="admin-apcec/crear-noticia">
                <b>Inventario de Noticias</b>
              </Link>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Header>
              <h3>Administrar Usuarios</h3>
            </Card.Header>
            <Card.Body>
              Crea, edita o elimina los usuarios de tu tienda.
            </Card.Body>
            <Card.Footer>
              <div>
                <b>En Desarrollo </b>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <h3>Administrar Pagina de Inicio</h3>
            </Card.Header>
            <Card.Body>
              Edita las categorias que se muestran en la pagina de inicio.
            </Card.Body>
            <Card.Footer>
              <div>
                <b>En Desarrollo </b>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <h3>Ventas</h3>
            </Card.Header>
            <Card.Body>Ver resumen de ventas y articulos vendidos</Card.Body>
            <Card.Footer>
              <div>
                <b>En Desarrollo </b>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <GoToTop />
    </Container>
  );
}

export default AdminPage;
