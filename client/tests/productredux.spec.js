import { expect } from "chai";
import { createStore } from "redux";

import {
  getProducts,
  productReducer,
  addProduct
} from "../store/reducers/productReducer";

const drinks = [
  { id: 1, name: "Buzz Cola" },
  { id: 2, name: "Slurm" },
  { id: 3, name: "Duff" }
];

const foods = [
  { id: 1, name: "Reptar Bar" },
  { id: 2, name: "Poplars" },
  { id: 3, name: "Krabby Patty" }
];

function getRandomProduct(products) {
  return products[Math.floor(Math.random() * products.length)];
}

describe("Action creators", () => {
  describe("getProducts", () => {
    it("returns properly formatted action", () => {
      const product = getRandomProduct(drinks);

      expect(getProducts(product)).to.be.deep.equal({
        type: "GET_PRODUCTS",
        products: product
      });
    });
  });

  describe("addProduct", () => {
    it("returns properly formatted action", () => {
      const product = getRandomProduct(drinks);
      expect(addProduct(product)).to.be.deep.equal({
        type: "ADD_PRODUCT",
        drink: product
      });
    });
  });
});

describe("Reducer", () => {
  it("returns the initial state by default", () => {
    const store = createStore(productReducer);
    expect(store.getState().list).to.be.an("array");
    expect(store.getState().getProducts).to.be.an("object");
  });

  describe("reduces on GET_PRODUCTS action", () => {
    it("sets the action's products as the getProducts on state (without mutating the previous state)", () => {
      const store = createStore(productReducer);
      const prevState = store.getState();

      const product = getRandomProduct(drinks);
      const action = {
        type: "GET_PRODUCTS",
        products: product
      };
      store.dispatch(action);
      const newState = store.getState();

      expect(store.getState().getProducts).to.be.deep.equal(product);

      expect(newState.getProducts).to.not.be.equal(prevState.petToPreview);
    });
  });
});
