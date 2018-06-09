import React from 'react';
import { connect } from 'react-redux';
import AddToCartButton from './AddToCartButton';
import AverateRating from './AverateRating';
import ProductReview from './ProductReview';
import { HashLink as Link } from 'react-router-hash-link';

const ProductDetail = props => {
  const { selectedProduct } = props;
  const reviews = selectedProduct.reviews;

  return (
    <div>
      <div id="main-prod-description">
        <div>
          <h2>{selectedProduct.name}</h2>
        </div>
        <br />
        <div>
          <AverateRating product={selectedProduct} />
        </div>
        <div>
          <Link to={`${selectedProduct.id}/#reviewList`}>Reviews</Link>
        </div>
        <br />
        <div>
          <img src={selectedProduct.imageUrl} />
        </div>
        <br />
        <div>
          <h3>About this Product:</h3>
          <br />
          <div className="product-description">
            {selectedProduct.description}
          </div>
        </div>
      </div>
      <div id="add-to-cart">
        <div>Price: {selectedProduct.price}</div>
        <br />
        <div>
          <h3>In stock: </h3>
          {selectedProduct.inventoryQuantity
            ? 'Yes get some before they are gone'
            : 'Sorry! we are out of stock'}
        </div>
        <div>
          <AddToCartButton product={selectedProduct} />
        </div>
        <br />
      </div>
      <div id="reviewList">
        <h3>Customer Reviews:</h3>
        {reviews.map(review => (
          <ProductReview key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

const mapState = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  const findProduct = state.products.list.find(product => product.id === id);
  return {
    selectedProduct: findProduct,
  };
};

export default connect(mapState)(ProductDetail);
