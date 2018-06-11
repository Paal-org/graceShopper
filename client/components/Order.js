import React from 'react';
import OrderLineItem from './OrderLineItem';

const Order = props => {
  const order = props.order;
  const products = props.order.products;
  const subtotalArr =
    products &&
    products.map(product => {
      return product.lineItem.purchaseQuantity * product.price;
    });
  const totalPrice =
    products && subtotalArr.reduce((total, num) => total + num, 0);
  return (
    <div>
      <h3>Order #{order.id}</h3>
      <div className="table table-condensed border">
        <table id="cart" className="table table-condensed">
          <thead>
            <tr>
              <th style={{ width: '60%' }}>Product</th>
              <th style={{ width: '20%' }}>Price</th>
              <th style={{ width: '8%' }}>Quantity</th>
              <th style={{ width: '22%' }} className="text-center">
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
                <strong>Order Status: {order.shippingStatus}</strong>
              </td>
              <td colSpan="2" className="hidden-xs" />
              <td className="hidden-xs text-center">
                <strong>Total $ {totalPrice}</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Order;
