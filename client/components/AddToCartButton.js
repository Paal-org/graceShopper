import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postToCart } from '../store/reducers/cartReducer';

//*-----------------     COMPONENT     -----------------*/

class AddToCartButton extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { product, cart } = this.props;
    const ifProductExist = cart.cart.products.filter(
      eachProduct => eachProduct.id === this.props.product.id
    );
    if (!ifProductExist.length) {
      this.props.postToCart(product);
    }
    // else {
    //     dispatch update thunk
    // }
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        <button
          className="addToCartButton"
          disabled={!product.inventoryQuantity}
          type="button"
          onClick={this.addToCart}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

const mapState = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatch = dispatch => {
  return {
    postToCart: item => {
      dispatch(postToCart(item));
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(AddToCartButton);
