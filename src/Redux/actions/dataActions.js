import {
  GET_PRODUCT,
  GET_PRODUCTS,
  LOADING_UI,
  LOADING_PRODUCTS,
} from "../types.js";

// set loading /// --------------------------------------------- testing -------------------

export const setLoading = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
};

export const getProducts = () => (dispatch) => {
  dispatch({ type: LOADING_PRODUCTS });
  dispatch({ type: GET_PRODUCTS }); // payload: res.data
};
