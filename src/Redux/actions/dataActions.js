import {
  GET_PRODUCT,
  GET_PRODUCTS,
  LOADING_UI,
  LOADING_PRODUCTS,
  SET_PRODUCT,
} from "../types.js";

import { API, graphqlOperation } from "aws-amplify";
// queries....
import { listShortProducts } from "../../graphql/custom-queries.js";
import { getProducts, listProducts } from "../../graphql/queries";
// mutations..
import { createProducts } from "../../graphql/mutations.js";

// import { v4 as uuidv4 } from "uuid";

// import queries from api

// set loading /// --------------------------------------------- testing ---------------------------

export const setLoading = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
};

// actions needed

// get news, promotional material

// products in homepage should be requested by category. Next, products should be listed by populary / frequency / user preference.

//  get most look up products

// get comments

// set product start rate

// set products to your cart

// set product to a save list

// set a comment

// get summary information of a product

// get products home page

export const getShortProducts = () => async (dispatch) => {
  dispatch({ type: LOADING_PRODUCTS });

  try {
    const result = await API.graphql(graphqlOperation(listShortProducts));
    if (result != null) {
      dispatch({ type: GET_PRODUCTS, payload: result.data.listProducts.items });
    }
  } catch (err) {
    console.error(err);
  }
};

// add a new product

export const addProduct = (productData) => async (dispatch) => {
  dispatch({ type: LOADING_PRODUCTS });
  try {
    const pushProduct = await API.graphql(
      graphqlOperation(createProducts, { input: productData })
    );

    if (pushProduct) {
      dispatch({ type: SET_PRODUCT, payload: productData });
      alert("Producto añadido exitosamente");
      console.log("success");
    }
  } catch (err) {
    // TODO handle with a type of error to show the error in the interface
    console.error(err);
  }
};

// get a complete product

export const getProduct = (productID) => async (dispatch) => {
  dispatch({ type: LOADING_PRODUCTS });
  try {
    const product = await API.graphql(
      graphqlOperation(getProducts, { id: productID })
    );

    if (product) {
      dispatch({ type: GET_PRODUCT, payload: product.data.getProducts });
    }
  } catch (err) {
    console.error(err);
  }
};

//get similar products

export const getProductbyCategory =
  (productCategory, productId) => async (dispatch) => {
    dispatch({ type: LOADING_PRODUCTS });
    try {
      const productsByCategory = await API.graphql(
        graphqlOperation(listProducts, {
          filter: {
            categories: { contains: productCategory },
            id: { notContains: productId },
          },
        })
      );
      if (productsByCategory) {
        console.log(productsByCategory);
        dispatch({
          type: GET_PRODUCTS,
          payload: productsByCategory.data.listProducts.items,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };
