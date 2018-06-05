import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const Products = props => {
  const { products } = props;
  return (
    <div>
      <div>
        <h1>All Products:</h1>
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

const mapState = state => {
  return {
    products: state.products.list,
  };
};

export default connect(mapState)(Products);
