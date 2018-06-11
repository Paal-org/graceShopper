import React from 'react';
import { connect } from 'react-redux';
import Products from './Products';
import { Link } from 'react-router-dom';

const ProductsList = props => {
  const { products, category, user } = props;

  // const urlPath = props.location.pathname;
  // const header = urlPath.slice(10).toUpperCase()
  return (
    <div>
      <div>{category ? <h1>{category}</h1> : <h1>ALL PRODUCTS</h1>}</div>
      {user.isAdmin && (
        <Link to="/products/addproduct">
          <button type="button" className="add-product">
            Add Product
          </button>
        </Link>
      )}
      <Products products={products} />
    </div>
  );
};

const mapState = (state, ownProps) => {
  const urlPath = ownProps.location.pathname;
  const header = urlPath.slice(10);
  let productList = [];
  if (header) {
    productList = state.products.list.filter(
      product => product.category.name === header
    );
  } else {
    productList = state.products.list;
  }
  return {
    user: state.user,
    products: productList,
    category: header.toUpperCase(),
  };
};

export default connect(mapState)(ProductsList);
