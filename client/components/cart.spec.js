/* global describe beforeEach it */

import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CartItem from './CartItem';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('Cart', () => {
  let product;
  let store;
  let wrapper;
  let instance;

  const initialState = {};
  const mockStore = configureStore();

  xit('is a registered callback for submit events', () => {
    store = mockStore(initialState);
    product = {
      id: 10,
      name: 'Reptar Cereal',
      price: 15,
      lineItem: {
        purchaseQuantity: 1,
      },
      category: {
        name: 'food',
      },
    };

    sinon.spy(CartItem.propTypes, 'updateToCart').returns(true);
    wrapper = shallow(<CartItem product={product} store={store} />);
    console.log(CartItem);

    let event = { target: { name: 'purchaseQuantity', value: '5' } };
    wrapper.find('input').simulate('change', event);
    wrapper.find('form').simulate('submit', event);
    expect(CartItem.prototype.handleChange.calledOnce).to.equal(true);
    expect(CartItem.prototype.updateToCart.calledWith(event)).to.equal(true);
  });
});
