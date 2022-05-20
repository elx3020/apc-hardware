import React from "react";
import { connect } from "react-redux";

import ProductComponent from "./ProductComponent";
import CardGroup from "react-bootstrap/CardGroup";

import "./style.scss";

export const ProductCategoryComponent = (props) => {
  const { category, data } = props;

  // get data from the prop data

  // component needs to know type of user and api end point
  // it will be better if the component itself call the database to retrive the products base on parameters like category, popularity in that category,

  const products = data.map((item, index) => {
    return (
      <ProductComponent
        id={index}
        key={index}
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
