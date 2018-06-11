import { expect } from "chai";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import history from "../history";

import {
  getProducts,
  productReducer,
  createProduct,
  updateProduct,
  CREATE_PRODUCT
} from "../store/reducers/productReducer";

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  let store;
  const initialState = { products: {} };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  afterEach(() => {
    store.clearActions();
  });

  it("should create an action to get products", () => {
    let text = "products";
    let type = "GET_PRODUCTS";
    let expectedAction = {
      type: type,
      products: "products"
    };
    expect(getProducts(text)).to.deep.equal(expectedAction);
  });

  it("should create an action to create a product", () => {
    let text = "product";
    let type = "CREATE_PRODUCT";
    let expectedAction = {
      type: type,
      product: "product"
    };
    expect(createProduct(text)).to.deep.equal(expectedAction);
  });

  it("should create an action to update a product", () => {
    let text = "product";
    let type = "UPDATE_PRODUCT";
    let expectedAction = {
      type: type,
      product: "product"
    };
    expect(updateProduct(text)).to.deep.equal(expectedAction);
  });
});

describe("product reducer", () => {
  it("should return the initial state", () => {
    expect(productReducer(undefined, {})).toEqual([
      {
        list: [],
        isFetching: false
      }
    ]);
  });

  it("should handle CREATE_PRODUCT", () => {
    expect(
      productReducer([], {
        type: CREATE_PRODUCT,
        action: "product"
      })
    ).toEqual([
      {
        type: CREATE_PRODUCT,
        list: [...state.list, action.product],
        isFetching: true
      }
    ]);
  });
});
