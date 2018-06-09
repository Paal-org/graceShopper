import React, {Component} from 'react'
import {connect} from 'react-redux'

class EditProduct extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ProductForm product={product} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    product: state.product
  }
}

export default connect(mapState)(EditProduct)
