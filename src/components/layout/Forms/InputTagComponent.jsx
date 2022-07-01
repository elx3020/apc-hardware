import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function InputTagComponent(props) {
  const { categoryArray, handleAdd, handleRemove } = props;

  const generateCategory = (categoryArray) => {
    let categoriesTag;
    if (categoryArray.length > 0) {
      categoriesTag = categoryArray.map((category, index) => {
        return (
          <div key={index} className="category-item" onClick={handleRemove}>
            <p>{category}</p>
          </div>
        );
      });
      return categoriesTag;
    }
  };

  const categoriesTag = generateCategory(categoryArray);

  return (
    <Form.Group className="mb-3" controlId="category-id">
      <Form.Label>Categoria</Form.Label>
      <Form.Control type="text" placeholder="Escribe una categoria" />
      <div className="category-wrapper">{categoriesTag}</div>
      <Button onClick={handleAdd}>Añadir Categoria</Button>
    </Form.Group>
  );
}

export default InputTagComponent;
