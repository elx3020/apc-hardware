import { INIT_ACTION } from "redux-devtools-instrument";
import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "../types";

const intialState = {
  user: {},
  status: "unauthenticated",
};

export default function (state = intialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        user: action.payload,
        status: "authenticated",
      };
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        user: {},
        status: "unauthenticated",
      };
    default:
      return state;
  }
}
