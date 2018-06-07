import React from "react";
import OrderLineItem from "./OrderLineItem";

const Order = props => {
  const order = props.order;
  const products = props.order.products;
  return (
    <div>
      <h2>Order #{order.id}</h2>
      {products.map(product => (
        <OrderLineItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Order;
