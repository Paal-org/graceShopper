import axios from "axios";

const GET_ACCOUNT = "GET_ACCOUNT";

const getAccount = account => ({ type: GET_ACCOUNT, account });

const initialState = {
  details: [],
  isFetching: false
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNT:
      return { details: action.account, isFetching: true };
    default:
      return state;
  }
}
