import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { putToCart } from '../store/reducers/cartReducer';

//*-----------------     CLASS COMPONENT     -----------------*/
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchaseQuantity: this.props.product.lineItem.purchaseQuantity,
    };
    this.updateToCart = this.updateToCart.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //*-----------------     Event Handlers     -----------------*/

  handleChange(evt) {
    this.setState({
      [evt.target.name]: +evt.target.value,
    });
  }

  updateToCart(evt) {
    evt.preventDefault();
    const { product } = this.props;
    this.props.putToCart({
      purchaseQuantity: this.state.purchaseQuantity,
      product,
    });
  }

  //*-----------------     Render     -----------------*/
  render() {
    const { product } = this.props;
    return (
      <div className="card">
        <div>
          {product && (
            <div>
              <Link to={`/products/${product.category.name}/${product.id}`}>
                <img className="card-img-top" src={product.imageUrl} />
              </Link>
              <div className="card-title">
                <Link to={`/products/${product.category.name}/${product.id}`}>
                  {product.name}
                </Link>
              </div>
              <div>Price: ${product.price}</div>
              <form onSubmit={this.updateToCart}>
                <div className="form-inline">
                  <div className="form-group mx-sm-1 mb-2">
                    <div>
                      <input
                        className="form-control form-control-sm"
                        type="number"
                        name="purchaseQuantity"
                        value={this.state.purchaseQuantity}
                        onChange={this.handleChange}
                        min="1"
                      />

                      <button
                        className="btn btn-primary btn-sm addToCartButton"
                        disabled={!product.inventoryQuantity}
                        type="submit"
                      >
                        Update to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

//*-----------------     MAPPING TO STORE     -----------------*/
// const mapState = state => {
//   return {
//     cart: state.cart.cart,
//   };
// };

const mapDispatch = dispatch => {
  return {
    putToCart: item => {
      dispatch(putToCart(item));
    },
  };
};

export default connect(
  null,
  mapDispatch
)(CartItem);
