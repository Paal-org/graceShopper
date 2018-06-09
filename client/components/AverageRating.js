import React from 'react';
import Rating from 'react-rating';

const AverageRating = props => {
  const { product } = props;
  const reviews = product.reviews;
  let sum = 0;
  reviews.length
    ? reviews.map(review => {
        sum += review.rating;
        return review;
      })
    : (sum = 0);
  const avgerageRating = sum / reviews.length || 1;

  return (
    <div>
      {reviews.length ? (
        <Rating
          emptySymbol={<img src="/img/softdrinks-empty.png" className="icon" />}
          fullSymbol={<img src="/img/softdrinks-full.png" className="icon" />}
          initialRating={avgerageRating}
          readonly
        />
      ) : (
        <div className="no-review-title">
          No reviews, be the first to leave one
        </div>
      )}
    </div>
  );
};

export default AverageRating;
