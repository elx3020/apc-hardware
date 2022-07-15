import {
  GET_PRODUCT,
  GET_PRODUCTS,
  LOADING_UI,
  SHOW_DATA,
  LOADING_PRODUCTS,
  SET_PRODUCT,
  GET_NEWS,
  SET_NEW,
  GET_PRODUCTS_INVENTORY,
  DELETE_PRODUCT_INVENTORY,
} from "../types.js";

import { API, graphqlOperation } from "aws-amplify";
// queries....
import {
  listShortProducts,
  listProductsInventory,
} from "../../graphql/custom-queries.js";
import { getProducts, listProducts, listNews } from "../../graphql/queries";
// mutations..
import {
  createNews,
  createProducts,
  updateProducts,
  deleteProducts,
} from "../../graphql/mutations.js";

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
    const result = await API.graphql({
      query: listShortProducts,
      authMode: "API_KEY",
    });
    if (result != null) {
      dispatch({ type: GET_PRODUCTS, payload: result.data.listProducts.items });
    }
  } catch (err) {
    console.error(err);
  }
};

// get product inventory page

export const getListProductsInventory = (options) => async (dispatch) => {
  dispatch({ type: LOADING_PRODUCTS });

  try {
    const result = await API.graphql(
      graphqlOperation(listProductsInventory, { options })
    );
    if (result) {
      dispatch({
        type: GET_PRODUCTS_INVENTORY,
        payload: result.data.listProducts.items,
        token: result.data.listProducts.nextToken,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

// add a new product

export const addProduct = (productData) => async (dispatch) => {
  try {
    const pushProduct = await API.graphql(
      graphqlOperation(createProducts, { input: productData })
    );

    if (pushProduct) {
      dispatch({ type: SET_PRODUCT, payload: productData });
      alert(`Producto ${productData.name} añadido exitosamente `);
      console.log("success");
    }
  } catch (err) {
    // TODO handle with a type of error to show the error in the interface
    console.error(err);
  }
};

// get a complete product

export const getProduct = (productID) => async (dispatch) => {
  dispatch({ type: LOADING_UI });
  try {
    const product = await API.graphql({
      query: getProducts,
      authMode: "API_KEY",
      variables: { id: productID },
    });

    if (product) {
      dispatch({ type: GET_PRODUCT, payload: product.data.getProducts });
      dispatch({ type: SHOW_DATA });
    }
  } catch (err) {
    console.error(err);
  }
};

// update product data

export const updatedProductData = (productData) => async (dispatch) => {
  dispatch({ type: LOADING_UI });

  try {
    const updateData = API.graphql(
      graphqlOperation(updateProducts, { input: productData })
    );

    if (updateData) {
      dispatch({ type: SHOW_DATA });
      alert(`${productData.name} ha sido actualizado exitosamente`);
    }
  } catch (err) {
    console.log(err);
  }
};

// ---------------------------------------------- delete product  ---------------------------------------------

export const deleteProduct = (productId) => async (dispatch) => {
  // productId shape {id: productId}
  try {
    const deleteData = API.graphql(
      graphqlOperation(deleteProducts, { input: productId })
    );
    if (deleteData) {
      console.log(deleteData);
      dispatch({ type: DELETE_PRODUCT_INVENTORY, payload: productId.id });
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

export const getNews = () => async (dispatch) => {
  dispatch({ type: LOADING_UI });
  try {
    const news = await API.graphql({
      query: listNews,
      authMode: "API_KEY",
      variables: { limit: 3 },
    });
    dispatch({ type: GET_NEWS, payload: news.data.listNews.items });
  } catch (err) {
    console.error(err);
  }
  dispatch({ type: SHOW_DATA });
};

export const addNews = (newsData) => async (dispatch) => {
  try {
    const pushNews = await API.graphql(
      graphqlOperation(createNews, { input: newsData })
    );

    if (pushNews) {
      console.log("success");
      dispatch({ type: SET_NEW, payload: newsData });
    }
  } catch (err) {
    console.error(err);
  }
};
