/* eslint-disable default-case */
import {
  GET_PRODUCTS,
  GET_PRODUCT,
  LOADING_PRODUCTS,
  SET_PRODUCT,
  GET_NEWS,
} from "../types";

// initial state in production should only show the structure of the data

const initialState = {
  products: [],
  productsbyCategory: {},
  news: [],
  productDescription: {},
  comments: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        productDescription: action.payload,
        loading: false,
      };
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case LOADING_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
