import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import Order from './Order';

const PendingOrderItem = props => {
  const { order } = props;
  let orderPrice = 0;
  order.products.forEach(product => {
    orderPrice +=
      product.lineItem.purchasePrice * product.lineItem.purchaseQuantity;
  });
  return (
    <tr>
      <td data-th="Order Number">
        <div className="row ">
          <div className="col-sm-4 hidden-xs">
            <img className="rounded mx-auto d-block cart-image" />
          </div>
          <div className="col-sm-8">
            <h4 className="nomargin">
              <Link to={`/orders/${order.id}`}>{order.id}</Link>
            </h4>
          </div>
        </div>
      </td>
      <td data-th="Customer Name">
        {order.user.firstName} {order.user.lastName}
      </td>
      <td data-th="Order Date">{dateFormat(order.updatedAt, 'shortDate')}</td>
      <td data-th="Purchase Price">${orderPrice}</td>
    </tr>
  );
};

export default PendingOrderItem;
