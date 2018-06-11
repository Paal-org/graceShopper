import { expect } from "chai";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import history from "../history";

import productReducer, {
  getProducts,
  createProduct,
  updateProduct,
  CREATE_PRODUCT
} from "../store/reducers/productReducer";

const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  let store;
  const initialState = { list: [], isFetching: false };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  afterEach(() => {
    store.clearActions();
  });

  it("should create an action to GET_PRODUCTS", () => {
    let products = [];
    let type = "GET_PRODUCTS";
    let expectedAction = {
      type: "GET_PRODUCTS",
      products: []
    };
    expect(getProducts(products)).to.deep.equal(expectedAction);
  });

  it("should create an action to create a product", () => {
    let text = "product";
    let type = "CREATE_PRODUCT";
    let expectedAction = {
      type,
      product: "product"
    };
    expect(createProduct(text)).to.deep.equal(expectedAction);
  });

  it("should create an action to update a product", () => {
    let text = "product";
    let type = "UPDATE_PRODUCT";
    let expectedAction = {
      type,
      product: "product"
    };
    expect(updateProduct(text)).to.deep.equal(expectedAction);
  });
});

describe("product reducer", () => {
  const state = { list: [], isFetching: false };
  it("should return the initial state", () => {
    expect(productReducer(undefined, {})).to.deep.equal({
      list: [],
      isFetching: false
    });
  });

  xit("should handle CREATE_PRODUCT", () => {
    const testAction = {
      type: CREATE_PRODUCT,
      product: "product"
    };
    expect(productReducer(state, testAction)).to.deep.equal({
      list: [],
      isFetching: true
    });
  });
});
