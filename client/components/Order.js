import React from "react";
import OrderLineItem from "./OrderLineItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Order = props => {
  const order = props.order || {};
  const user = props.user || {};

  const products = props.order.products || [];
  const subtotalArr =
    products &&
    products.map(product => {
      return product.lineItem.purchaseQuantity * product.price;
    });
  const totalPrice =
    products && subtotalArr.reduce((total, num) => total + num, 0);
  if (!props.isFetching) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      <h3>Order #{order.id}</h3>
      <div className="table table-condensed border">
        <table id="cart" className="table table-condensed">
          <thead>
            <tr>
              <th style={{ width: "60%" }}>Product</th>
              <th style={{ width: "20%" }}>Price</th>
              <th style={{ width: "8%" }}>Quantity</th>
              <th style={{ width: "22%" }} className="text-center">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map(product => (
                <OrderLineItem key={product.id} product={product} />
              ))}
          </tbody>
          <tfoot>
            <tr className="visible-xs">
              <td className="text-center" />
            </tr>
            <tr>
              <td data-th="Product">
                <strong>Shipping Status: {order.shippingStatus}</strong>
              </td>
              <td colSpan="2" className="hidden-xs" />
              <td className="hidden-xs text-center">
                <strong>Total $ {totalPrice}</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      {user.isAdmin && <Link to="/orders">Back to All Pending Orders</Link>}
    </div>
  );
};
//if admin, make link to go back to all pending orders

const mapState = (state, ownProps) => {
  return {
    user: state.user,
    isFetching: state.pendingOrders.isFetching && state.products.isFetching
  };
};

export default connect(mapState)(Order);
