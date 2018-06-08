import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postToCart } from '../store/reducers/cartReducer';

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

  handleChange() {
    this.setState(prevState => ({
      purchaseQuantity: prevState.purchaseQuantity + 1,
    }));
  }

  addToCart(evt) {
    evt.preventDefault();
    const { product, cart } = this.props;
    const ifProductExist = cart.cart.products.filter(
      eachProduct => eachProduct.id === this.props.product.id
    );
    if (!ifProductExist.length) {
      this.props.postToCart({
        purchaseQuantity: this.state.purchaseQuantity,
        product,
      });
      this.setState(defaultState);
    }
    // else {
    //     dispatch update thunk
    // }
  }

  //*-----------------     Render     -----------------*/
  render() {
    const { product } = this.props;
    return (
      <form onSubmit={this.addToCart}>
        <div>
          <div className="form-inline">
            <div className="form-group mx-sm-1 mb-2">
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
                disabled={!product.inventoryQuantity}
                type="submit"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

//*-----------------     MAPPING TO STORE     -----------------*/
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
