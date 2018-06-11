import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postToCart, putToCart } from '../store/reducers/cartReducer';

//*-----------------     Default state     -----------------*/
const defaultState = {
  purchaseQuantity: 1,
};

//*-----------------     CLASS COMPONENT     -----------------*/

class AddToCartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseQuantity: 1,
    };
    this.addToCart = this.addToCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //*-----------------     Event Handlers     -----------------*/

  handleChange(evt) {
    this.setState({
      [evt.target.name]: +evt.target.value,
    });
  }

  addToCart(evt) {
    evt.preventDefault();
    const { product, cart } = this.props;
    console.log('cart in button', cart);
    const ifProductExist = cart.products.filter(
      eachProduct => eachProduct.id === this.props.product.id
    );
    if (!ifProductExist.length) {
      this.props.postToCart({
        purchaseQuantity: this.state.purchaseQuantity,
        product,
      });
      this.setState(defaultState);
    } else {
      const newProductQuantity =
        ifProductExist[0].lineItem.purchaseQuantity +
        this.state.purchaseQuantity;
      this.props.putToCart({
        purchaseQuantity: newProductQuantity,
        product,
      });
    }
  }

  //*-----------------     Render     -----------------*/
  render() {
    const { product } = this.props;
    const warningMessage =
      this.state.purchaseQuantity > product.inventoryQuantity
        ? `Only ${product.inventoryQuantity} left in stock`
        : '';
    return (
      <form onSubmit={this.addToCart} className="form-inline">
        {warningMessage && <span className="warning">{warningMessage}</span>}
        <div className="form-group mx-sm-3 mb-2">
          <input
            className="form-control form-control-sm"
            type="number"
            name="purchaseQuantity"
            min="1"
            value={this.state.purchaseQuantity}
            onChange={this.handleChange}
          />
          <button
            className="btn btn-primary btn-sm addToCartButton"
            disabled={
              !product.inventoryQuantity ||
              this.state.purchaseQuantity > product.inventoryQuantity
            }
            type="submit"
          >
            Add to Cart
          </button>
        </div>
      </form>
    );
  }
}

//*-----------------     MAPPING TO STORE     -----------------*/
const mapState = state => {
  return {
    cart: state.cart.cart,
  };
};

const mapDispatch = dispatch => {
  return {
    postToCart: item => {
      dispatch(postToCart(item));
    },
    putToCart: item => {
      dispatch(putToCart(item));
    },
  };
};

export default connect(
  mapState,
  mapDispatch
)(AddToCartButton);
