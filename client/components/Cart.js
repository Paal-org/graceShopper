import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { pushOrder } from '../store/reducers/accountReducer';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.pushOrder(this.props.cart);
  }
  render() {
    const products = this.props.cart.products;
    const isFetching = this.props.isFetching;

    const subtotalArr =
      products &&
      products.map(product => {
        return product.lineItem.purchaseQuantity * product.price;
      });
    const totalPrice =
      products && subtotalArr.reduce((total, num) => total + num, 0);

    if (!isFetching) {
      return <div>Loading...</div>;
    }
    return (
      <div className="table table-hover table-condensed">
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: '50%' }}>Product</th>
              <th style={{ width: '10%' }}>Price</th>
              <th style={{ width: '8%' }}>Quantity</th>
              <th style={{ width: '22%' }} className="text-center">
                Subtotal
              </th>
              <th style={{ width: '10%' }} />
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
                <a href="/products" className="btn btn-warning">
                  <i className="fa fa-angle-left" /> Continue Shopping
                </a>
              </td>
              <td colSpan="2" className="hidden-xs" />
              <td className="hidden-xs text-center">
                <strong>Total $ {totalPrice}</strong>
              </td>
              <td>
                <Link to="/account">
                  <button
                    type="button"
                    href="#"
                    className="btn btn-success btn-block"
                    onClick={this.handleSubmit}
                  >
                    Checkout <i className="fa fa-angle-right" />
                  </button>
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapState = state => {
  return {
    cart: state.cart.cart,
    isFetching: state.cart.isFetching,
  };
};

const mapDispatch = dispatch => {
  return {
    pushOrder: order => dispatch(pushOrder(order)),
  };
};

export default connect(
  mapState,
  mapDispatch
)(Cart);

/**
 * PROP TYPES
 */
