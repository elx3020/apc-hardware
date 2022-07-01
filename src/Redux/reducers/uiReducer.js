import {
  LOADING_UI,
  LOADING_IMAGES,
  SHOW_IMAGES,
  SET_ERRORS,
  CLEAR_ERRORS,
  SHOW_DATA,
} from "../types";

const intialState = {
  loading: false,
  loadingImages: false,
  errors: null,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case LOADING_IMAGES:
      return {
        ...state,
        loadingImages: true,
      };
    case SHOW_IMAGES:
      return {
        ...state,
        loadingImages: false,
      };
    case SHOW_DATA:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
