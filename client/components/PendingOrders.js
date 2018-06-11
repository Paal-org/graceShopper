import React from 'react';
import { connect } from 'react-redux';
import PendingOrderItem from './PendingOrderItem';

const PendingOrders = props => {
  const orders = props.orderList;
  const isFetching = props.isFetching;
  if (!isFetching) {
    return <div>Loading...</div>;
  }
  if (!orders.length) {
    return (
      <div>
        <br />
        <div>No Pending Orders</div>
        <br />
      </div>
    );
  }
  return (
    <div className="table table-hover table-condensed">
      <table id="cart" className="table table-hover table-condensed">
        <thead>
          <tr>
            <th style={{ width: '10%' }}>Order Number</th>
            <th style={{ width: '50%' }}>Customer Name</th>
            <th style={{ width: '18%' }}>Order Date</th>
            <th style={{ width: '22%' }} className="text-center">
              Purchase Price
            </th>
            {/* <th style={{ width: '10%' }} /> days since order placed */}
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map(order => {
              return <PendingOrderItem key={order.id} order={order} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

const mapState = state => {
  return {
    orderList: state.pendingOrders.orderList,
    isFetching: state.pendingOrders.isFetching,
  };
};

export default connect(mapState)(PendingOrders);
