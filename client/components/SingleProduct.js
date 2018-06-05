import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SingleProduct = props => {
  const { product } = props
  return (
    <div>
      <div>
        This is a single product
      </div>
    </div>
  )
}

export default SingleProduct
