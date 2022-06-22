import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevToolsLogOnlyInProduction } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/dataReducer.js";
import uiReducer from "./reducers/uiReducer.js";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  ui: uiReducer,
});

const composeEnhancers = composeWithDevToolsLogOnlyInProduction({
  // options like actionSanitizer, stateSanitizer
});

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
