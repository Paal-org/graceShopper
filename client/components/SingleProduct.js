import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import AverateRating from "./AverateRating";

const SingleProduct = props => {
  const { product } = props;
  return (
    <div className="card">
      <Link to={`/products/${product.category.name}/${product.id}`}>
        <img className="card-img-top" src={product.imageUrl} />
      </Link>
      <div>
        <div className="card-title">
          <Link to={`/products/${product.category.name}/${product.id}`}>
            {product.name}
          </Link>
        </div>

        <div>
          <AverateRating product={product} />
        </div>
        <div>${product.price}</div>
        <div className="card-footer">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
