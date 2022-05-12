import React from "react";
import { connect } from "react-redux";

import ProductComponent from "./ProductComponent";
import CardGroup from "react-bootstrap/CardGroup";

import "./style.scss";

export const ProductCategoryComponent = (props) => {
  const { category, data } = props;

  console.log(data);

  const fakeData = [1, 2, 3, 4, 5];

  const products = data.map((item, index) => {
    return (
      <ProductComponent
        id={index}
        title={item.title}
        src={item.img}
        description={item.linkDescription}
        rating="5 stars"
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
