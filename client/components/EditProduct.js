import React, {Component} from 'react'
import {connect} from 'react-redux'
import ProductForm from './ProductForm'

class EditProduct extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ProductForm />
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

export default connect(mapState)(EditProduct)
