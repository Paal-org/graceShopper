import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { putToCart } from '../store/reducers/cartReducer';
import DeleteFromCartButton from './DeleteFromCartButton';

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
      <tr>
        <td data-th="Product">
          <div className="row ">
            <div className="col-sm-4 hidden-xs">
              <img
                className="rounded mx-auto d-block cart-image"
                src={product.imageUrl}
                alt="..."
              />
            </div>
            <div className="col-sm-8">
              <h4 className="nomargin">
                <Link to={`/products/${product.category.name}/${product.id}`}>
                  {product.name}
                </Link>
              </h4>
            </div>
          </div>
        </td>
        <td data-th="Price">$ {product.price}</td>
        <td data-th="Quantity">
          <form onSubmit={this.updateToCart}>
            <input
              type="number"
              className="form-control text-center"
              name="purchaseQuantity"
              value={this.state.purchaseQuantity}
              onChange={this.handleChange}
              min="1"
            />
            <button
              className="btn btn-info btn-sm"
              disabled={!product.inventoryQuantity}
              type="submit"
            >
              <i className="fas fa-pencil-alt" />
            </button>
          </form>
        </td>
        <td data-th="Subtotal" className="text-center">
          $ {this.state.purchaseQuantity * product.price}
        </td>
        <td className="actions" data-th="">
          <DeleteFromCartButton product={product} />
        </td>
      </tr>
    );
  }
}

//*-----------------     MAPPING TO STORE     -----------------*/

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
