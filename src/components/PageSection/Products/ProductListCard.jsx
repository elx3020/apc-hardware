import React from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import "./style.scss";
function ProductListCard(props) {
  const history = useHistory();
  const { id, name, quantity, price, loading, image, addItem, toggleSelect } =
    props;

  function editProduct() {
    history.push(`/admin/editproduct/${id}`);
  }

  function handleCheck(e) {
    addItem(e);
  }

  const checkBox = toggleSelect ? (
    <Form>
      <Form.Check
        type="checkbox"
        id={id}
        onChange={(e) => handleCheck(e)}
      ></Form.Check>
    </Form>
  ) : null;

  const cardContent = loading ? (
    <div>Loading...</div>
  ) : (
    <Container>
      <div className="card-list-wrapper">
        {checkBox}

        <div className="card-list">
          <div className="img-wrapper-list">
            <img src={image} alt="product" />
          </div>
          <div className="card-text">
            <tbody>
              <tr>{name}</tr>
              <tr>{`Cantidad: ${quantity}`}</tr>
              <tr>{`$ ${price}`}</tr>
            </tbody>
          </div>
          <div className="buttons-wrapper">
            <Button onClick={editProduct}>Editar</Button>
          </div>
        </div>
      </div>
    </Container>
  );

  return cardContent;
}

export default ProductListCard;
