import React from 'react';
import { me } from '../store';
import { connect } from 'react-redux';

const AccountStatic = props => {
  const user = props.user;
  return (
    <div>
      <div>
        <h1>Account Details</h1>
      </div>
      <div>First Name: {user.firstName}</div>
      <div>Last Name: {user.lastName}</div>
      <div>Address: {user.address}</div>
      <div>Email: {user.email}</div>
    </div>
  );
};

const mapState = state => {
  return { userAccount: state.account };
};

export default connect(mapState)(AccountStatic);
