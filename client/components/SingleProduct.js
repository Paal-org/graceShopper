import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SingleProduct = props => {
  const { product } = props
  return (
    <div>
      <Link to={`/products/${product.category}/${product.id}`}>
      <div>
        <div><img src={product.imageUrl} /></div>
        <div>{product.name}</div>
        <div>${product.price}</div>
      </div>
      </Link>
    </div>
  )
}

export default SingleProduct