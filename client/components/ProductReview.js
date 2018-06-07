import React from 'react';
import Rating from 'react-rating';

const ProductReview = props => {
  const { review } = props;

  return (
    <div>
      <div>
        <h4>
          {review.user.firstName} {review.user.lastName}
        </h4>
        <div>
          <Rating
            emptySymbol={
              <img src="/img/softdrinks-empty.png" className="icon" />
            }
            fullSymbol={<img src="/img/softdrinks-full.png" className="icon" />}
            initialRating={review.rating}
            readonly
          />
        </div>
        <div>{review.content}</div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ProductReview;
