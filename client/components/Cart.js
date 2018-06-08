import React from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import CartItem from './CartItem';

const Cart = props => {
  const products = props.cart.cart.products;
  return (
    <div className="card-columns">
      {props.cart.isFetching &&
        products.map(product => {
          return <CartItem key={product.id} product={product} />;
        })}
    </div>
  );
};

const mapState = state => {
  return {
    cart: state.cart,
    // userId: state.user.id
  };
};

export default connect(mapState)(Cart);

/**
 * PROP TYPES
 */
