import axios from 'axios';

const GET_CART = 'GET_CART';

const getCart = cart => ({ type: GET_CART, cart });

const initialState = {
  cart: {},
  isFetching: false,
};

export const fetchCart = () => {
  return async dispatch => {
    const { data } = await axios.get(`/api/cart`);
    console.log('data', data);
    dispatch(getCart(data[0]));
  };
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return { cart: action.cart, isFetching: true };
    default:
      return state;
  }
}
