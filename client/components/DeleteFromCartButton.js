import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destroyCartItem } from '../store/reducers/cartReducer';

//*-----------------     CLASS COMPONENT     -----------------*/

class DeleteFromCartButton extends Component {
  constructor(props) {
    super(props);
    this.deleteCartItem = this.deleteCartItem.bind(this);
  }

  //*-----------------     Event Handlers     -----------------*/

  deleteCartItem() {
    const { deleteCartItem, product } = this.props;
    console.log('deletebutton, what is products', product);
    deleteCartItem(product.id);
  }

  //*-----------------     Render     -----------------*/
  render() {
    return (
      <div className="btn btn-secondary deleteButton">
        <button type="button" onClick={this.deleteCartItem}>
          Remove
        </button>
      </div>
    );
  }
}

//*-----------------     MAPPING TO STORE     -----------------*/

const mapDispatch = dispatch => {
  return {
    deleteCartItem: id => {
      dispatch(destroyCartItem(id));
    },
  };
};

export default connect(
  null,
  mapDispatch
)(DeleteFromCartButton);
