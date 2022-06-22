import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOADING_UI } from "../types";

// some stuff to import

export const getUserStatus = (user) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  if (user === undefined) {
    dispatch({ type: SET_AUTHENTICATED });
  } else {
    dispatch({ type: SET_UNAUTHENTICATED });
  }
};
