import React from "react";
import { connect } from "react-redux";

import ProductCard from "./ProductCard";
import CardGroup from "react-bootstrap/CardGroup";
import { filterbyCategory } from "../../../utils/utilsFunctions";
import { useEffect, useState } from "react";
import "./style.scss";

export const ProductCardContainer = (props) => {
  const { category, data, nItems, titleCategory, loading } = props;
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    setFilterData(filterbyCategory(data, category, nItems));
  }, [loading]);

  // get data from the prop data

  // component needs to know type of user and api end point
  // it will be better if the component itself call the database to retrive the products base on parameters like category, popularity in that category, but with redux store it is better to call the specific data for the user. Populate the redux store and redirect the content to the components

  const products =
    filterData.length > 0 ? (
      filterData.map((item, index) => {
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

  const componentContent = loading ? (
    <div>Loading...</div>
  ) : (
    <CardGroup style={{ columnGap: "10px" }}>{products}</CardGroup>
  );

  return (
    <div className="home-category">
      <h2 style={{ marginBottom: "2%" }}>{titleCategory}</h2>
      {componentContent}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCardContainer);
