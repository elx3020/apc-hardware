/* eslint-disable default-case */
import { GET_PRODUCTS, GET_PRODUCT, LOADING_PRODUCTS } from "../types";

// ---------------------------------------------------------testing --------------------------------------------

import fakeImg from "../../images/logo192.png";

const productItem = {
  img: fakeImg,
  title: "FakeProduct",
  rating: "rating",
  linkDescription: "I am a description for a fake product.Click go to product.",
};

const productDescription = {
  productId: 99,
  images: ["src1", "src2", "src3"],
  title: "FakeProduct",
  rating: "rating",
  available: true,
  description: "I am a bigger description for a fake product.",
};

// ---------------------------------------------------------testing --------------------------------------------

// initial state in production should only show the structure of the data

const intialState = {
  products: [productItem, productItem, productItem, productItem],
  product: productDescription,
  comments: [],
  loading: false,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        // products: action.payload,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        // product: action.payload,
        loading: false,
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
