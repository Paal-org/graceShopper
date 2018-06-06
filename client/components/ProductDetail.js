import React from 'react';
import { connect } from 'react-redux';

const ProductDetail = props => {
  const { selectedProduct } = props;
  const reviews = selectedProduct.reviews;
  let sum = 0;
  reviews.length
    ? reviews.map(review => {
        sum += review.rating;
        return review;
      })
    : (sum = 0);
  const avg = sum / reviews.length || 1;
  return (
    <div>
      <div id="main-prod-description">
        <div>
          <h2>{selectedProduct.name}</h2>
        </div>
        <br />
        <div>Review: {reviews.length ? avg : 'Be the first to leave one'}</div>
        <br />
        <div>
          <img src={selectedProduct.imageUrl} />
        </div>
        <br />
        <div>
          About this Product:
          <br />
          {selectedProduct.description}
        </div>
      </div>
      <div id="add-to-cart">
        <div>Price: {selectedProduct.price}</div>
        <br />
        <div>
          In stock:{' '}
          {selectedProduct.inventoryQuantity
            ? 'Yes get some before they are gone'
            : 'Sorry! we are out of stock'}
        </div>
        <br />
      </div>
      <div>
        Customer Reviews:
        {reviews.map(review => {
          return (
            <div key={review.id}>
              <div>Rating: {review.rating}</div>
              <div>{review.content}</div>
              <br />
              <br />
            </div>
          );
        })}
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
