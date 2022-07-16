import React from "react";

import { useEffect, useState } from "react";
// redux
import { connect } from "react-redux";
import {
  getProduct,
  getProductbyCategory,
} from "../../Redux/actions/dataActions";
import { useParams } from "react-router-dom";

//  components
import Container from "react-bootstrap/esm/Container";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import RatingElement from "../../components/PageSection/Products/RatingElement";
import ProductDescripionImages from "../../components/products/ProductDescriptionImages";
import "./style.scss";

export const ProductDescriptionPage = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const { product, suggestedProducts, loading } = props;

  const {
    name,
    price,
    rating,
    numberRatings,
    categories,
    description,
    model,
    manufacturer,
  } = product;

  useEffect(() => {
    props.getProduct(productId);
  }, []);

  const productImages = loading ? (
    <div>Loading...</div>
  ) : (
    <ProductDescripionImages />
  );

  const productOption = false ? (
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
  ) : null;

  const discount = false ? (
    <span className="show-discount">Descuento</span>
  ) : null;

  const loadedContent = (
    <div>
      <article>
        <Container style={{ width: "80%", padding: "2% 0" }}>
          {/* main product description */}

          <section className="flex-section product-info">
            {productImages}

            {/* product Description */}
            <div className="product-details">
              <header className="product-header">
                <h1>{name}</h1>
                <div className="product-rating">
                  <RatingElement
                    rating={rating}
                    numberRatings={numberRatings}
                    maxValue={5}
                    backgroundColor={"rgb(239, 239, 239)"}
                  />
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>Modelo:</th>
                      <td>{model}</td>
                    </tr>
                    <tr>
                      <th>Marca:</th>
                      <td>{manufacturer}</td>
                    </tr>
                  </tbody>
                </table>
              </header>
              <div className="price-wrapper">
                <div>
                  <span style={{ color: "darkgray" }}>$ {price}</span>
                </div>
                {discount}
                <span className="price-tag">$ {price}</span>{" "}
                <span> ( Precio PROMO para efectivo o transferencia )</span>
              </div>
              {productOption}

              <ul className="about-item">
                <li>Aqui va la oracion 1 corta que describe el producto</li>
                <li>Aqui va la oracion 2 corta que describe el producto</li>
                <li>Aqui va la oracion 3 corta que describe el producto</li>
              </ul>

              <InputGroup size="sm" style={{ width: "10rem" }}>
                <InputGroup.Text>Cantidad:</InputGroup.Text>
                <Button
                  variant="outline-secondary"
                  id="button-addon1"
                  onClick={() => {
                    setQuantity((prev) => {
                      if (prev > 1) {
                        return prev - 1;
                      }
                      return prev;
                    });
                  }}
                >
                  -
                </Button>

                <FormControl
                  readOnly
                  aria-label="cantidad del producto"
                  value={quantity}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon1"
                  onClick={() => {
                    setQuantity((prev) => {
                      return prev + 1;
                    });
                  }}
                >
                  +
                </Button>
              </InputGroup>

              <Button variant="success" size="sm" style={{ margin: "10px 0" }}>
                Añadir al Carrito
              </Button>
              <p>
                <b>Politicas de Envio:</b> <br /> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Praesent nec sollicitudin enim.
                Morbi varius sapien at vehicula sollicitudin. Ut ornare erat non
                ex sodales, vel vulputate mauris lacinia. Aliquam sed elit
                vehicula, sollicitudin mauris a, accumsan nulla.
              </p>
            </div>
          </section>

          <Accordion alwaysOpen defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Descripcion</Accordion.Header>
              <Accordion.Body>
                {" "}
                <p>{description}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <section>
            <h3>Productos similares</h3>
            {/* <ProductCardContainer
              category={categories}
              data={products}
              loading={loading}
            /> */}
          </section>

          {/* <section>
        <h3>Preguntas y respuestas</h3>
      </section>
      <section>
        <h3>Reseñas</h3>
      </section> */}
        </Container>
      </article>
    </div>
  );

  const pageContent = loading ? (
    <div style={{ height: "100vh" }}> Loading..</div>
  ) : (
    loadedContent
  );
  return pageContent;
};

const mapStateToProps = (state) => ({
  product: state.data.productDescription,
  suggestedProducts: state.data.suggestedProducts,
  loading: state.ui.loading,
});

const mapDispatchToProps = {
  getProduct,
  getProductbyCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDescriptionPage);
