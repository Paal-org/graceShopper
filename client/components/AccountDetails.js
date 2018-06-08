import React from 'react';
import { me } from '../store';
import { connect } from 'react-redux';
import AccountStatic from './AccountStatic';
import OrderList from './OrderList';

const AccountDetails = props => {
  const user = props.userAccount.details;
  const orders = props.userAccount.details.orders;
  return (
    <div>
      <AccountStatic user={user} />
      <OrderList orders={orders} />
    </div>
  );
};

const mapState = state => {
  return { userAccount: state.account };
};

export default connect(mapState)(AccountDetails);
