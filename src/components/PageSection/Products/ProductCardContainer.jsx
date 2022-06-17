import React from "react";
import { connect } from "react-redux";

import ProductCard from "./ProductCard";
import CardGroup from "react-bootstrap/CardGroup";
import { filterbyCategory } from "../../../utils/utilsFunctions";

import "./style.scss";

export const ProductCardContainer = (props) => {
  const { category, data, nItems, titleCategory } = props;

  // get data from the prop data

  // component needs to know type of user and api end point
  // it will be better if the component itself call the database to retrive the products base on parameters like category, popularity in that category, but with redux store it is better to call the specific data for the user. Populate the redux store and redirect the content to the components

  const filterdata = filterbyCategory(data, category, nItems);

  const products =
    filterdata.length > 0 ? (
      filterdata.map((item, index) => {
        return (
          <ProductCard
            id={item.id}
            key={index}
            name={item.name}
            image={item.images[0]}
            rating={item.rating}
            price={item.price}
          />
        );
      })
    ) : (
      <div>Nothing to show</div>
    );

  return (
    <div className="home-category">
      <h2 style={{ marginBottom: "2%" }}>{titleCategory}</h2>
      <CardGroup style={{ columnGap: "10px" }}>{products}</CardGroup>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCardContainer);
