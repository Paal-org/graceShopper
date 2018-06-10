import axios from 'axios';
//import { setCart } from './accountReducer';

const GET_ACCOUNT = 'GET_ACCOUNT';
const CLEAR_ACCOUNT = 'CLEAR_ACCOUNT';
export const ADD_ORDER = 'ADD_ORDER';

const getAccount = account => ({ type: GET_ACCOUNT, account });
const addOrder = order => ({ type: ADD_ORDER, order });

export const clearAccount = () => {
  return { type: CLEAR_ACCOUNT };
};

const initialState = {
  details: {},
  isFetching: false,
};
export const fetchAccount = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/users/account');
    dispatch(getAccount(data));
  };
};

export const pushOrder = order => {
  return async dispatch => {
    const { data } = await axios.put('/api/checkout', order);
    dispatch(addOrder(data)); //updatedOrder and newCart
    //dispatch clearCart and setCart

    //dispatch(setCart(data.newCart));
  };
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNT:
      return { details: action.account, isFetching: true };
    case CLEAR_ACCOUNT:
      return { details: {}, isFetching: true };
    case ADD_ORDER:
      const newOrders = state.details.orders.map(order => {
        return order.id === action.order.updatedOrder.id
          ? action.order.updatedOrder
          : order;
      });
      const newDetails = { ...state.details, orders: newOrders };
      return { details: newDetails, isFetching: true }; //details: array with new order added and old order replaced
    default:
      return state;
  }
}
