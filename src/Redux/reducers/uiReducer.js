import { LOADING_UI, SET_ERRORS, CLEAR_ERRORS, SHOW_DATA } from "../types";

const intialState = {
  loading: false,
  errors: null,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case LOADING_UI:
      return {
        ...state,
        loading: true,
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
