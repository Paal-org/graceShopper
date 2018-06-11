import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import AverageRating from './AverageRating';

const SingleProduct = props => {
  const { product, user } = props;
  console.log();
  return (
    <div className="card p-2 m-3 " style={{ width: '18rem' }}>
      <Link to={`/products/${product.category.name}/${product.id}`}>
        <img
          className="card-img-top mt-4 single-card"
          src={product.imageUrl}
          alt="Card image cap"
        />
      </Link>
      <div className="card-body">
        <div className="card-title center">
          <Link to={`/products/${product.category.name}/${product.id}`}>
            {product.name}
          </Link>
        </div>
        <AverageRating product={product} />
        <div>${product.price}</div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    user: state.user,
  };
};

export default connect(mapState)(SingleProduct);
