import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = props => {
  const { product } = props;
  return (
    <div>
      <div>
        <div>
          <h3>{product.name}</h3>
        </div>
        <div>
          <img src={product.imageUrl} />
        </div>
        <div>Price: ${product.price}</div>
        <form>
          <div>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={product.lineItem.purchaseQuantity}
              min="1"
              max="5"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartItem;
