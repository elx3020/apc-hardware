import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// components

import Card from "react-bootstrap/Card";
import RatingElement from "./RatingElement";

export const ProductCard = (props) => {
  const { id, name, price, image, rating, numberRatings } = props;

  // function handleClick() {
  //   history.replace(`/products/${id}`);
  // }

  return (
    <Card
      style={{
        maxWidth: "14vw",
        border: "none",
      }}
      // onClick={handleClick}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Card.Img
          style={{ height: "210px" }}
          src={image}
          alt={image}
          variant="top"
        />
      </div>

      <Card.Body style={{ padding: "3%" }}>
        <RatingElement
          rating={rating}
          numberRatings={numberRatings}
          maxValue={5}
          backgroundColor={"white"}
        />

        <span>
          <Link
            to={`/productos/${id}`}
            style={{
              fontSize: "16px",
              lineHeight: "110%",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            {name}
          </Link>
        </span>

        <div style={{ fontSize: "18px" }}>
          <span>$</span>
          <span>{price}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
