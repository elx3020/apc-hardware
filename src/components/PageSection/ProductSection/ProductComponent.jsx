import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// components

import Card from "react-bootstrap/Card";

export const ProductComponent = (props) => {
  const { title, src, description, id, rating } = props;

  const history = useHistory();

  function handleClick() {
    history.push(`/products/${id}`);
  }

  return (
    <Card
      style={{ border: "none", padding: "0 1%", cursor: "pointer" }}
      onClick={handleClick}
    >
      <Card.Img src={src} alt={src} variant="top" />

      <Card.Title>{title}</Card.Title>
      <div>{rating}</div>
      <Card.Link>{description}</Card.Link>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
