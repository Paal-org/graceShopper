import React from "react";
import { me } from "../store";
import { connect } from "react-redux";
import Order from "./Order";

const OrderList = props => {
  const orders = props.orders || [];
  console.log("orders", orders);
  return (
    <div>
      <h1>Order List</h1>
      {orders.map(
        order =>
          order.status === "complete" && <Order order={order} key={order.id} />
      )}
    </div>
  );
};

export default OrderList;
