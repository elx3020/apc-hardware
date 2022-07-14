/* eslint-disable default-case */
import {
  GET_PRODUCTS,
  GET_PRODUCT,
  LOADING_PRODUCTS,
  SET_PRODUCT,
  GET_NEWS,
  GET_PRODUCTS_INVENTORY,
  DELETE_PRODUCT_INVENTORY,
} from "../types";

// initial state in production should only show the structure of the data

const initialState = {
  products: [],
  productsbyCategory: {},
  listProductsInventory: [],
  news: [],
  productDescription: {},
  comments: [],
  nextToken: "",
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
    case GET_PRODUCTS_INVENTORY:
      return {
        ...state,
        listProductsInventory: action.payload,
        nextToken: action.token,
        loading: false,
      };
    case DELETE_PRODUCT_INVENTORY:
      return {
        ...state,
        listProductsInventory: state.listProductsInventory.filter(
          (product) => product.id !== action.payload
        ),
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
