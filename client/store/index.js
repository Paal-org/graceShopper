import { createStore, combineReducers, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./user";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";
import accountReducer from "./reducers/accountReducer";

const reducer = combineReducers({
  user,
  products: productReducer,
  categories: categoryReducer,
  account: accountReducer
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./user";
export * from "./reducers/productReducer";
export * from "./reducers/categoryReducer";
export * from "./reducers/accountReducer";
