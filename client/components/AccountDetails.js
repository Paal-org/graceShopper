import React from "react";
import { me } from "../store";
import { connect } from "react-redux";
import { fetchAccount } from "../store/reducers/accountReducer";

const AccountDetails = props => {
  return <div>These are the account details</div>;
};

const mapState = state => {
  return { userAccount: state.account };
};

export default connect(mapState)(AccountDetails);
