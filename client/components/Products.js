import React, { Component } from 'react';
import SingleProduct from './SingleProduct';
import Pagination from 'react-js-pagination';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      itemsCountPerPage: 6,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }

  render() {
    const { products } = this.props;
    const productsArr = products.slice();
    const pagesArr = [];
    const size = this.state.itemsCountPerPage;
    while (productsArr.length > 0) {
      pagesArr.push(productsArr.splice(0, size));
    }
    const singlePageArr = pagesArr[this.state.activePage - 1];
    return (
      <div>
        <Pagination
          hideDisabled
          activePage={this.state.activePage}
          itemsCountPerPage={size}
          totalItemsCount={products.length}
          onChange={this.handlePageChange}
        />
        <div className="card-columns">
          {products.length
            ? singlePageArr.map(product => (
                <SingleProduct product={product} key={product.id} />
              ))
            : 'There are no products'}
        </div>
        <Pagination
          hideDisabled
          activePage={this.state.activePage}
          itemsCountPerPage={size}
          totalItemsCount={products.length}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Products;
