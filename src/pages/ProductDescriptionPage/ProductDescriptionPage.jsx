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
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Figure from "react-bootstrap/Figure";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ProductCardContainer from "../../components/PageSection/Products/ProductCardContainer";

import "./style.scss";

export const ProductDescriptionPage = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const { product, products, loading } = props;

  const {
    name,
    price,
    rating,
    numberRatings,
    categories,
    images,
    description,
  } = product;

  useEffect(() => {
    props.getProduct(productId);
    if (products.length < 1) {
      console.log("find products");
      props.getProductbyCategory(categories[0], productId);
    }
  }, [productId]);

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
            <div className="img-wrapper">
              <img src={images} alt="product" />
            </div>
            <div className="product-details">
              <header>
                <h2>{name}</h2>
                <div className="product-rating">
                  <div>{rating}</div>
                  <div>{numberRatings}</div>
                </div>
              </header>
              <div className="price-wrapper">
                {discount}
                <span className="price-tag">$ {price}</span>
              </div>
              {productOption}
              <div>
                <InputGroup className="quantity">
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
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
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
                <Button>Añadir al Carrito</Button>
              </div>

              <ul className="about-item">
                <li>{description}</li>
              </ul>
            </div>
          </section>

          <Accordion alwaysOpen defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Descripcion</Accordion.Header>
              <Accordion.Body>{description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <section>
            <h3>Productos similares</h3>
            <ProductCardContainer category={categories} data={products} />
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

  const pageContent = loading ? <div> Loading..</div> : loadedContent;
  return pageContent;
};

const mapStateToProps = (state) => ({
  product: state.data.productDescription,
  products: state.data.products,
  loading: state.data.loading,
});

const mapDispatchToProps = {
  getProduct,
  getProductbyCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDescriptionPage);
