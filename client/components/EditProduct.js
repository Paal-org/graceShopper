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

const mapState = (state, ownProps) => {
  
  return {
    product: state.products.list.filter(product => product.category.id === id)
  }
}

export default connect(mapState)(EditProduct)
