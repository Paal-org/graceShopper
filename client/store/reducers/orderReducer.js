import axios from 'axios';

const GET_PENDING_ORDERS = 'GET_PENDING_ORDERS';

const getPendingOrders = pendingOrders => ({
  type: GET_PENDING_ORDERS,
  pendingOrders,
});

const initialState = {
  orderList: [],
  isFetching: false,
};

export const fetchPendingOrders = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/orders');
    dispatch(getPendingOrders(data));
  };
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PENDING_ORDERS:
      return { orderList: action.pendingOrders, isFetching: true };
    default:
      return state;
  }
}
