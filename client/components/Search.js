import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleProduct from './SingleProduct';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      products: this.props.productList || [],
    });
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value,
      products: this.props.productList.filter(product => {
        return product.name
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase());
      }),
    });
  }
  render() {
    return (
      <div>
        <div>Search</div>
        <form className="form-group">
          <input
            className="form-control"
            placeholder="Start typing to search for a product"
            onChange={this.handleChange}
          />
        </form>
        <div>
          {this.state.products.map(product => (
            <SingleProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    productList: state.products.list,
  };
};

export default connect(mapState)(Search);
