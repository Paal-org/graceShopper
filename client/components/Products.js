import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';
import Pagination from 'react-js-pagination';

class Products extends Component {
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
    const { products } = this.props;
    return (
      <div>
        <Pagination
          hideDisabled
          activePage={this.state.activePage}
          itemsCountPerPage={4}
          totalItemsCount={products.length}
          onChange={this.handlePageChange}
        />
        <div className="card-columns">
          {products.length
            ? products.map(product => (
                <SingleProduct product={product} key={product.id} />
              ))
            : 'There are no products'}
        </div>
      </div>
    );
  }
}

export default Products;
