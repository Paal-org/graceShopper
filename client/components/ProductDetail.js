import React from 'react';
import { connect } from 'react-redux';
import AddToCartButton from './AddToCartButton';
import AverageRating from './AverageRating';
import AddReview from './AddReview';
import ProductReview from './ProductReview';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const ProductDetail = props => {
  const { selectedProduct, user } = props;
  const reviews = selectedProduct.reviews;

  return (
    <div>
      <div>
        <h2>{selectedProduct.name}</h2>
      </div>
      <div>
        <AverageRating product={selectedProduct} />
      </div>
      <div>
        {reviews.length ? (
          <HashLink to={`${selectedProduct.id}/#reviewList`}>
            {reviews.length} Reviews
          </HashLink>
        ) : (
          ''
        )}
      </div>
      <div id="main-prod-description" className="row">
        <div className="col">
          <div>
            <img
              src={selectedProduct.imageUrl}
              className="product-detail-image"
            />
          </div>
          <br />
          <div>
            {user.isAdmin && (
              <Link to={`/products/${selectedProduct.id}/edit`}>
                <button type="button" className="btn btn-primary edit-product">
                  Edit Product
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className="col">
          <div>
            <div>
              <h3>About this Product:</h3>
              <br />
              <div className="product-description">
                {selectedProduct.description}
              </div>
            </div>
          </div>
          <div id="add-to-cart">
            <div>Price: $ {selectedProduct.price}</div>
            <br />
            <div>
              <h3>In stock: {selectedProduct.inventoryQuantity}</h3>
              {selectedProduct.inventoryQuantity
                ? 'Get some before they are gone'
                : 'Sorry! we are out of stock'}
            </div>
            <div>
              <AddToCartButton product={selectedProduct} />
            </div>
          </div>
        </div>
        <br />
      </div>
      <div id="reviewList">
        <div className="row">
          <h3>Customer Reviews: </h3>
          <p>
            <a
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              style={{ padding: '15px' }}
            >
              Write a Review
            </a>
          </p>
          <div className="collapse w-100 p-3" id="collapseExample">
            {user.id ? (
              <div
                className="card card-body"
                style={{ width: '100%', padding: '15px' }}
              >
                <AddReview product={selectedProduct} />
              </div>
            ) : (
              <div className="card card-body" style={{ width: '100%' }}>
                Please Login/ Signup to write a review
                <br />
                <br />
                <div className="row">
                  <Link to="/login" className="col-2">
                    <img className="nav-icon" src="/img/enter.png" />Login
                  </Link>
                  <Link to="/signup" className="col-2">
                    <img className="nav-icon" src="/img/edit.png" />Sign Up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
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
    user: state.user,
  };
};

export default connect(mapState)(ProductDetail);
