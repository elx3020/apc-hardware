import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// components

import Card from "react-bootstrap/Card";

export const ProductCard = (props) => {
  const { id, name, price, image, rating } = props;

  // function handleClick() {
  //   history.replace(`/products/${id}`);
  // }

  return (
    <Card
      style={{
        maxWidth: "25%",
        border: "none",
        padding: "1% 1%",
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
      <Card.Body as={"table"} style={{ padding: "1%" }}>
        <tbody>
          <tr>
            <td>
              <span>{rating}</span>
            </td>
          </tr>
          <tr style={{ fontSize: "22px" }}>
            <td>
              <span>$</span>
              <span>{price}</span>
            </td>
          </tr>
          <tr>
            <td>
              <Link
                to={`/products/${id}`}
                style={{
                  fontSize: "16px",
                  lineHeight: "110%",
                  display: "inline-block",
                }}
              >
                {name}
              </Link>
            </td>
          </tr>
        </tbody>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
