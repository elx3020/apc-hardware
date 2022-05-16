import React from "react";

import { useEffect } from "react";
// redux
import { connect } from "react-redux";
import { getProduct } from "../../Redux/actions/dataActions";
import { useParams } from "react-router-dom/cjs/react-router-dom";

//  components
import Container from "react-bootstrap/esm/Container";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Figure from "react-bootstrap/Figure";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ProductCategoryComponent from "../../components/PageSection/ProductSection/ProductCategoryComponent";

import "./style.scss";

export const ProductDescriptionPage = (props) => {
  const { productId } = useParams();

  const { product, products } = props;

  useEffect(() => {
    console.log("s");
    getProduct();
  }, []);

  return (
    <div>
      <article>
        <Container style={{ width: "80%", padding: "2% 0" }}>
          {/* main product description */}

          <section className="flex-section product-info">
            <div className="img-wrapper">
              <Figure>
                <Figure.Image
                  alt="Imagen del producto"
                  src="holder.js/171x180"
                />
                <Figure.Caption>Se puede poner un pie de pagina</Figure.Caption>
              </Figure>
            </div>
            <div className="product-details">
              <header>
                <h2>
                  SanDisk Ultra microSDHC memory card + SD adapter with A1 app
                  performance up to 120 MB/s, Class 10, U1
                </h2>
                <div className="product-rating">
                  <div>CalificacionProducto</div>
                  <div>NumCalificaciones</div>
                </div>
              </header>
              <div className="price-wrapper">
                <span className="show-discount">Descuento</span>{" "}
                <span className="price-tag">Precio</span>
              </div>
              <Form>
                <Form.Group className="mb-3" controlId="selectType">
                  <Form.Label>Option</Form.Label>
                  <Form.Select>
                    <option>Tipo 1</option>
                    <option>Tipo 2</option>
                    <option>Tipo 3</option>
                  </Form.Select>
                </Form.Group>
              </Form>
              <div>
                <InputGroup className="quantity">
                  <Button variant="outline-secondary" id="button-addon1">
                    -
                  </Button>
                  <FormControl
                    readOnly
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                  />
                  <Button variant="outline-secondary" id="button-addon1">
                    +
                  </Button>
                </InputGroup>
                <Button>Añadir al Carrito</Button>
              </div>

              <ul className="about-item">
                <li>
                  Ideal for Android smartphones and tablets as well as MIL
                  cameras{" "}
                </li>
                <li>Up to 1TB of storage for hours of full HD video </li>
                <li>Class 10 for Full HD video recording and playback </li>
                <li>
                  Up to 120MB/s transfer speed that allows you to transfer up to
                  1000 photos per minute{" "}
                </li>
                <li>Faster loading of apps thanks to A1 performance. </li>
              </ul>
            </div>
          </section>

          <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ficha Tecnica</Accordion.Header>
              <Accordion.Body>
                El disco duro interno de 3,5” X300 de Toshiba está diseñado para
                tu PC profesional o de juegos, y proporciona un almacenamiento
                fiable, de gran capacidad y con un rendimiento increíblemente
                alto que es posible gracias a una serie de avanzadas
                características, incluyendo un búfer extremadamente alto de 512
                MB ,256 MB o 128MB. Incluso cuenta con una precisión posicional
                mejorada para una grabación estable. El X300 está disponible con
                capacidades de hasta 18 TB. Es ideal para jugadores de PC,
                diseñadores gráficos y otros usuarios con necesidades de
                almacenamiento exigentes. Potentes estaciones de trabajo de
                sobremesa Equipos todo en uno Equipos para jugar Equipos de alto
                rendimiento Equipos multimedia domésticos El diseño del
                dual-stage actuator del X300 mejora la precisión posicional,
                anulando los efectos que las vibraciones pueden tener en la
                alineación del cabezal y la pista. Este diseño proporciona una
                velocidad de lectura y escritura más precisa y rápida para un
                acceso instantáneo a tus datos. La vibración es uno de los
                mayores enemigos del funcionamiento de una unidad de disco duro
                fiable. La innovadora tecnología Stable Platter Technology de
                Toshiba reduce al mínimo las vibraciones mediante la
                estabilización del eje del motor en ambos lados. Además, esto
                implica una precisión de seguimiento mejorada y un rendimiento
                máximo durante las operaciones de lectura y escritura. El diseño
                del X300 incluye un sensor de golpes interno para garantizar que
                no se pierda ningún dato. Además, la tecnología ramp loading
                hace que el deslizador de la unidad no entre en contacto con el
                disco al transportar el disco duro o el equipo de sobremesa y no
                haya riesgo de deterioro o pérdida de datos. Factor de forma 3,5
                pulgadas Interfaz SATA 6,0 Gbit/s Formato avanzado (AF) Sí
                Compatibilidad con RoHS Sí Libre de halógenos Sí Sensor de
                golpes Sí Rendimiento Velocidad de rotación 7,200 rpm Tamaño del
                búfer 256 MB Latencia media 4.17 ms Native Command Queing (NCQ)
                Admitido Fiabilidad MTTF 600 000 horas
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Descripcion</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <section>
            <h3>Productos similares</h3>
            <ProductCategoryComponent category="Computadoras" data={products} />
          </section>

          <section>
            <h3>Preguntas y respuestas</h3>
          </section>
          <section>
            <h3>Reseñas</h3>
          </section>
        </Container>
      </article>
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.data.product,
  products: state.data.products,
});

const mapDispatchToProps = {
  getProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDescriptionPage);
