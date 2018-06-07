import React from "react";

const OrderLineItem = props => {
  const product = props.product;
  return(
    <div>
      <div>
        <img src={product.imageUrl} />
      </div>
      <div>{product.name}</div>
      <div>Qty: {product.lineItem.purchaseQuantity}</div>
      <div>Price: {product.lineItem.purchasePrice}</div>

    </div>
  );
};

export default OrderLineItem;
