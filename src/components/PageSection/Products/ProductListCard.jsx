import React from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

import "./style.scss";
function ProductListCard(props) {
  const history = useHistory();
  const {
    id,
    name,
    quantity,
    price,
    loading,
    image,
    handleSelection,
    isSelected,
    toggleSelect,
    categories,
    deleteProduct,
  } = props;

  function editProduct() {
    history.push(`/admin-apcec/editproduct/${id}`);
  }

  const checkBox = toggleSelect ? (
    <Form>
      <Form.Check
        type="checkbox"
        id={id}
        checked={isSelected}
        onChange={(e) => handleSelection(e)}
      ></Form.Check>
    </Form>
  ) : null;

  let categoriesString = "";
  for (let i = 0; i < categories.length; i++) {
    categoriesString += `${categories[i]}/`;
  }

  const cardContent = loading ? (
    <div>Loading...</div>
  ) : (
    <div className="card-list-wrapper">
      {checkBox}

      <div className="card-list">
        <div className="img-wrapper-list">
          <img src={image} alt="product" />
        </div>
        <table className="card-text">
          <tbody>
            <tr>
              <td>
                <b>Nombre: </b>
                {name}
              </td>
            </tr>
            <tr>
              <td>
                <b>Cantidad: </b>
                {quantity}
              </td>
            </tr>
            <tr>
              <td>
                <b>Precio: </b>
                {`$ ${price}`}
              </td>
            </tr>
            <tr>
              <td>
                <b>Categorias: </b>
                {categoriesString}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="buttons-wrapper">
          <Button onClick={editProduct}>Editar</Button>
          {""}
          <Button variant="danger" id={id} onClick={deleteProduct}>
            Borrar
          </Button>
        </div>
      </div>
    </div>
  );

  return cardContent;
}

export default ProductListCard;
