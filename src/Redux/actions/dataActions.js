import {
  GET_PRODUCT,
  GET_PRODUCTS,
  LOADING_UI,
  LOADING_PRODUCTS,
  SET_PRODUCT,
} from "../types.js";

import { API, graphqlOperation } from "aws-amplify";
import { createProducts } from "../../graphql/mutations.js";

import { listProducts } from "../../graphql/queries.js";
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

export const getProducts = () => async (dispatch) => {
  dispatch({ type: LOADING_PRODUCTS });

  try {
    const result = await API.graphql(graphqlOperation(listProducts));
    console.log(result.data.listProducts);
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
