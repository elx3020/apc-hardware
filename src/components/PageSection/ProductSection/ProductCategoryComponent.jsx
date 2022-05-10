import React from "react";
import { connect } from "react-redux";

import ProductComponent from "./ProductComponent";
import CardGroup from "react-bootstrap/CardGroup";

import fakeImg from "../../../images/logo192.png";

import "./style.scss";

export const ProductCategoryComponent = (props) => {
  const { category } = props;

  const fakeData = [1, 2, 3, 4, 5];

  const products = fakeData.map((item, index) => {
    return (
      <ProductComponent
        id={index}
        title="Product"
        src={fakeImg}
        description="Some text to fill out the card of the product"
      />
    );
  });

  return (
    <div className="home-category">
      <h2 style={{ marginBottom: "2%" }}>{category}</h2>
      <CardGroup style={{ columnGap: "10px" }}>{products}</CardGroup>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCategoryComponent);
