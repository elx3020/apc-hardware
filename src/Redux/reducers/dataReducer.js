/* eslint-disable default-case */
import {
  GET_PRODUCTS,
  GET_PRODUCT,
  LOADING_PRODUCTS,
  SET_PRODUCT,
} from "../types";

// ---------------------------------------------------------testing --------------------------------------------

import fakeImg from "../../images/logo192.png";

const raton = {
  img: fakeImg,
  title: "Raton de PC",
  rating: 4.7,
  linkDescription: "I am a description for a fake product.Click go to product.",
  categories: ["ratones", "periferico", "recomendado"],
};
const teclado = {
  img: fakeImg,
  title: "Teclado de PC",
  rating: 4.2,
  linkDescription: "I am a description for a fake product.Click go to product.",
  categories: ["teclado", "periferico", "recomendado"],
};
const pcCase = {
  img: fakeImg,
  title: "Case PC",
  rating: 3.4,
  linkDescription: "I am a description for a fake product.Click go to product.",
  categories: ["Cases", "periferico", "Pc"],
};
const computer = {
  img: fakeImg,
  title: "Computadora",
  rating: 3.7,
  linkDescription: "I am a description for a fake product.Click go to product.",
  categories: ["computer", "gamer"],
};
const computer2 = {
  img: fakeImg,
  title: "Computadora2",
  rating: 4,
  linkDescription: "I am a description for a fake product.Click go to product.",
  categories: ["computer", "gamer"],
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

const initialState = {
  products: [
    raton,
    teclado,
    pcCase,
    computer,
    raton,
    teclado,
    pcCase,
    computer,
    computer2,
  ],
  product: productDescription,
  comments: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
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
