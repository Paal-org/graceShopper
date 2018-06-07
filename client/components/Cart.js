import React from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';

const Cart = props => {
  const products = props.cart.cart.products;
  console.log(products);
  return (
    <div>
      {props.cart.isFetching &&
        products.map(product => {
          console.log(product);
          return <SingleProduct product={product} key={product.id} />;
        })}
    </div>
  );
};

const mapState = state => {
  console.log(state);
  return {
    cart: state.cart,
    // userId: state.user.id
  };
};

export default connect(mapState)(Cart);

/**
 * PROP TYPES
 */
