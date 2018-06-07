import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = props => {
  const { product } = props;
  return (
    <div>
      <Link to={`/products/${product.category.name}/${product.id}`}>
        <div>
          <div>
            <img src={product.imageUrl} />
          </div>
          <div>{product.name}</div>
          <div>${product.price}</div>
        </div>
      </Link>
    </div>
  );
};

export default SingleProduct;
