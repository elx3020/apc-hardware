import { LOADING_UI, SET_ERRORS, CLEAR_ERRORS } from "../types";

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
    default:
      return state;
  }
}
