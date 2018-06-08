import React from "react";
import { Link } from "react-router-dom";

const CartItem = props => {
  const { product } = props;
  return (
    <div className="card">
      <div>
        <Link to={`/products/${product.category.name}/${product.id}`}>
          <img className="card-img-top" src={product.imageUrl} />
        </Link>
        <div className="card-title">
          <Link to={`/products/${product.category.name}/${product.id}`}>
            {product.name}
          </Link>
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
