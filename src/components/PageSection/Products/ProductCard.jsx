import React from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";

// components

import Card from "react-bootstrap/Card";

export const ProductCard = (props) => {
  const { id, name, price, image, rating } = props;

  const history = useHistory();

  // function handleClick() {
  //   history.replace(`/products/${id}`);
  // }

  return (
    <Card
      style={{
        maxWidth: "25%",
        border: "none",
        padding: "1% 1%",
        cursor: "pointer",
      }}
      // onClick={handleClick}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          maxHeight: "230px",
        }}
      >
        <Card.Img src={image} alt={image} variant="top" />
      </div>

      <Card.Title></Card.Title>
      <Card.Body>
        <tbody>
          <tr>
            <Link to={`/products/${id}`}>{name}</Link>
          </tr>
          <tr>
            <span>{rating}</span>
          </tr>
          <tr>
            <span>$</span>
            <span>{price}</span>
          </tr>
        </tbody>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
