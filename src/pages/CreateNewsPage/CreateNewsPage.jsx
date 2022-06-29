import React from "react";

import Container from "react-bootstrap/Container";
import AddImageWithCaption from "../../components/layout/Forms/AddImageWithCaption";

function CreateNewsPage() {
  return (
    <div style={{ width: "100%", padding: "5vh 0" }}>
      <Container>
        <h1>Crear una nueva noticia</h1>
        <AddImageWithCaption />
      </Container>
    </div>
  );
}

export default CreateNewsPage;
