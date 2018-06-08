import React, { Component } from "react";
import { connect } from "react-redux";
import { createProduct } from "../store/reducers/productReducer";

const defaultState = {
  name: "",
  imageUrl: "",
  description: "",
  price: "",
  inventoryQuantity: ""
};

class AddProduct extends Component {
  constructor() {
    super();
    this.state = { defaultState };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addProduct({
      name: this.state.name,
      imageUrl: this.state.imageUrl,
      description: this.state.description,
      price: this.state.price,
      inventoryQuantity: this.state.inventoryQuantity
    });
    this.setState(defaultState);
  }

  render() {
    return <div>SUP</div>;
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addProduct: product => dispatch(addProduct(product, ownProps))
  };
};

export default connect(
  null,
  mapDispatch
)(AddProduct);
