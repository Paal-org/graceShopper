import React from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import CartItem from './CartItem';

const Cart = props => {
  const products = props.cart.products;
  return (
    <div className="card-columns">
      {products.map(product => {
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
    //}
  );
};

const mapState = state => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapState)(Cart);

/**
 * PROP TYPES
 */
