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
            <th style={{ width: '40%' }}>Product</th>
            <th style={{ width: '10%' }}>Price</th>
            <th style={{ width: '45%' }}>Quantity</th>
            {/* <th style={{ width: '5%' }} className="text-center">
              Subtotal
            </th> */}
            {/* <th style={{ width: '5%' }} /> */}
          </tr>
        </thead>

        <tbody>
          {products &&
            products.map(product => {
              return <CartItem key={product.id} product={product} />;
            })}
        </tbody>
        <tfoot>
          <tr className="visible-xs">
            <td className="text-center" />
          </tr>
          <tr>
            <td>
              <a href="#" className="btn btn-warning">
                <i className="fa fa-angle-left" /> Continue Shopping
              </a>
            </td>
            <td colSpan="2" className="hidden-xs" />
            <td className="hidden-xs text-center">
              <strong>Total $1.99</strong>
            </td>
            <td>
              <a href="#" className="btn btn-success btn-block">
                Checkout <i className="fa fa-angle-right" />
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
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
