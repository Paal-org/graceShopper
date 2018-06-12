import { expect } from 'chai';

import { cartReducer, getCart, clearCart, fetchCart } from './cartReducer';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import sinon from 'sinon';

describe('Cart Redux Tests', () => {
  describe('action creators', () => {
    let cart = {
      product: {
        name: 'Reptar Cereal',
        price: 15,
      },
    };
    it('getCart returns an GET_CART action', () => {
      const action = getCart(cart);
      expect(action).to.deep.equal({
        type: 'GET_CART',
        cart: cart,
      });
    });

    it('getLikes returns an GET_LIKE action', () => {
      const action = clearCart();
      expect(action).to.deep.equal({
        type: 'CLEAR_CART',
      });
    });
  });

  describe('thunk creators', () => {
    let cart = {
      product: {
        name: 'Reptar Cereal',
        price: 15,
      },
    };
    const mockAxios = new MockAdapter(axios);
    const mockStore = configureMockStore([thunkMiddleware]); // pass in middleware here
    const store = mockStore({ cart: {} });

    afterEach(() => store.clearActions());

    it('fetchCart makes a GET request to /api/cart', () => {
      mockAxios.onGet('/api/cart').replyOnce(200, cart);
      sinon.spy(axios, 'get');

      return store.dispatch(fetchCart()).then(() => {
        expect(axios.get.calledOnce).to.equal(true);
        expect(axios.get.calledWith('/api/cart')).to.equal(true);
      });
    });
  });
});
