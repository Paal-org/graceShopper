import axios from 'axios';

const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const CLEAR_CART = 'CLEAR_CART';

const getCart = cart => ({ type: GET_CART, cart });
const addToCart = item => {
  return { type: ADD_TO_CART, item };
};
export const clearCart = () => {
  return { type: CLEAR_CART };
};

const initialState = {
  cart: {},
  isFetching: false,
};

export const fetchCart = () => {
  return async dispatch => {
    const { data } = await axios.get(`/api/cart`);
    dispatch(getCart(data));
  };
};

export const postToCart = item => {
  return async dispatch => {
    const { data } = await axios.post('/api/cart', item);
    dispatch(addToCart(data));
  };
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART: {
      console.log('state in get_cart', action.cart);
      return { cart: action.cart, isFetching: true };
    }
    case ADD_TO_CART:
      return {
        cart: {
          ...state.cart,
          products: [...state.cart.products, action.item],
        },
        isFetching: true,
      };
    case CLEAR_CART:
      return { cart: {}, isFetching: true };
    default:
      return state;
  }
}
