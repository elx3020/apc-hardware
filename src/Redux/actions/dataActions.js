import {
  GET_PRODUCT,
  GET_PRODUCTS,
  LOADING_UI,
  LOADING_PRODUCTS,
} from "../types.js";

// fake payload to test functionality ---------------------------------------

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

export const getProducts = () => (dispatch) => {
  dispatch({ type: LOADING_PRODUCTS });
  dispatch({ type: GET_PRODUCTS });
};

export const getProduct = () => (dispatch) => {
  dispatch({ type: LOADING_PRODUCTS });
  dispatch({ type: GET_PRODUCT });

  // payload: res.data
};
