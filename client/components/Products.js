import React from "react";
import { connect } from "react-redux";
import SingleProduct from "./SingleProduct";

const Products = props => {
  const { products } = props;
  return (
    <div className="card-columns">
      {products.length
        ? products.map(product => (
            <SingleProduct product={product} key={product.id} />
          ))
        : "There are no products"}
    </div>
  );
};

export default Products;
