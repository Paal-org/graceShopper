import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './Products';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }
  render() {
    const { products, category, user } = this.props;

    // const urlPath = props.location.pathname;
    // const header = urlPath.slice(10).toUpperCase()
    return (
      <div>
        <Pagination
          hideDisabled
          activePage={this.state.activePage}
          itemsCountPerPage={4}
          totalItemsCount={products.length}
          onChange={this.handlePageChange}
        />
        <div>{category ? <h1>{category}</h1> : <h1>ALL PRODUCTS</h1>}</div>
        {user.isAdmin && (
          <Link to="/products/addproduct">
            <button type="button" className="add-product">
              Add Product
            </button>
          </Link>
        )}
        <Products products={products} />
        <Pagination
          hideDisabled
          activePage={this.state.activePage}
          itemsCountPerPage={4}
          totalItemsCount={products.length}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

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
