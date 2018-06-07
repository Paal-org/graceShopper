import React from 'react';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';

const Products = props => {
  const { products } = props;
  return (
    <div>
      <div>
        {/* need ternary or way to determine header based on route*/}
      </div>
      <div>
        {products.length
          ? products.map(product => (
              <SingleProduct product={product} key={product.id} />
            ))
          : 'There are no products'}
      </div>
    </div>
  );
};

export default Products;
