import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const ContactPage = (props) => {
  return (
    <article>
      <section>
        <Container style={{ width: "80%", padding: "2% 0" }}>
          <h2>Contacto</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control type="email" placeholder="Correo Electrónico" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTelephone">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="tel" placeholder="Número de Telefono" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formControlTextarea">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Container>
      </section>
      <section>
        <Container style={{ width: "80%", padding: "2% 0" }}>
          <h2>Ubicacion</h2>
          <iframe
            title="maps"
            width="100%"
            height="450"
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJS3La6k-F1ZER7RJ9KbBWrzc&key=AIzaSyAKkJjPTPBXUrUZsdrHq7NYD262pHhtqr8"
          ></iframe>
        </Container>
      </section>
    </article>
  );
};

export default ContactPage;
