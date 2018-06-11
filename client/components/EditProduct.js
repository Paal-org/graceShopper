import React, {Component} from 'react'
import {connect} from 'react-redux'
import ProductForm from './ProductForm'
import {editProduct} from '../store/reducers/productReducer'

class EditProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      imageUrl: "",
      description: "",
      price: "",
      inventoryQuantity: "",
      categoryId: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.editProduct(this.state);
    // this.props.history.push(
    //   `/products/${this.props.product.category.name}/${this.props.product.id}`
    // );
  }
  componentDidMount() {
    this.setState(this.props.product);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...nextProps,
      ...prevState
    };
  }

  render() {
    return (
      <div>
        <ProductForm {...this.state} {...this.props} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

const mapState = (state, ownProps) => {
  const productId = +ownProps.match.params.id
  return {
    product: state.products.list.find(product => product.id === productId)
  }
}

const mapDispatch = (dispatch, ownProps) => {
  const productId = +ownProps.match.params.id
  return {
    editProduct: product => dispatch(editProduct(productId, product, ownProps))
  }
}

export default connect(mapState, mapDispatch)(EditProduct)
