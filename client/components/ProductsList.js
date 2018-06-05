import React from "react";
import { connect } from "react-redux";
import Products from './Products'

const ProductsList = props => {
  const {products, category} = props

  // const urlPath = props.location.pathname;
  // const header = urlPath.slice(10).toUpperCase()
  return (
    <div>
    {category ? <h1>{category}</h1> : <h1>ALL PRODUCTS</h1>}
      <Products products={products} />
    </div>
  )
}

const mapState = (state, ownProps) => {
  const urlPath = ownProps.location.pathname;
  const header = urlPath.slice(10)
  let productList = []
  console.log('this is the state', state)
  if (header) {
    productList = state.products.list.filter(product => product.category === header)
    console.log('this is the filtered', productList)
  } else {
    productList = state.products.list
  }
  return {
    products: productList,
    category: header.toUpperCase()
  };
};

export default connect(mapState)(ProductsList);
