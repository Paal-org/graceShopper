import React from 'react';
import { me } from '../store';
import { connect } from 'react-redux';
import Order from './Order';

const OrderList = props => {
  const orders = props.orders || [];
  return (
    <div>
      <h1>Previous order List</h1>
      <div>
        {orders.map(
          order =>
            order.status === 'complete' && (
              <div className="order-list">
                <Order order={order} key={order.id} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default OrderList;
