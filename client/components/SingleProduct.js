import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import AverateRating from './AverateRating';

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
          <div>
            <AverateRating product={product} />
          </div>
          <div>${product.price}</div>
        </div>
      </Link>
      <div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default SingleProduct;
