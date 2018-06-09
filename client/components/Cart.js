import React from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import CartItem from './CartItem';

const Cart = props => {
  const products = props.cart.products;
  const isFetching = props.isFetching;
  if (!isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <div className="table table-hover table-condensed">
      <table id="cart" className="table table-hover table-condensed">
        <thead>
          <tr>
            <th style={{ width: '50%' }}>Product</th>
            <th style="width:10%">Price</th>
            <th style="width:8%">Quantity</th>
            <th style="width:22%" className="text-center">
              Subtotal
            </th>
            <th style="width:10%" />
          </tr>
        </thead>
      </table>
      {products &&
        products.map(product => {
          return <CartItem key={product.id} product={product} />;
        })}
    </div>
  );
};

const mapState = state => {
  return {
    cart: state.cart.cart,
    isFetching: state.cart.isFetching,
  };
};

export default connect(mapState)(Cart);

/**
 * PROP TYPES
 */
