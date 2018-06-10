import React, { Component } from "react";
import { connect } from "react-redux";
import { addProduct } from "../store/reducers/productReducer";
import ProductForm from "./ProductForm";

const defaultState = {
  name: "",
  imageUrl: "",
  description: "",
  price: "",
  inventoryQuantity: "",
  categoryId: ""
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
      inventoryQuantity: this.state.inventoryQuantity,
      categoryId: this.state.categoryId
    });
    this.setState(defaultState);
  }

  render() {
    const { isFetching } = this.props;
    if (!isFetching) {
      return <div>Loading...</div>;
    }
    return (
      <ProductForm
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapState = state => {
  return {
    isFetching: state.categories.isFetching,
    categories: state.categories
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    addProduct: product => dispatch(addProduct(product, ownProps))
  };
};

export default connect(
  mapState,
  mapDispatch
)(AddProduct);
