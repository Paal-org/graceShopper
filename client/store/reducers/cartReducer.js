import axios from 'axios';

const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const CLEAR_CART = 'CLEAR_CART';
const UPDATE_CART = 'UPDATE_CART';
const DELETE_CART_ITEM = 'DELETE_CART_ITEM';

const getCart = cart => ({ type: GET_CART, cart });
const addToCart = item => {
  return { type: ADD_TO_CART, item };
};
export const clearCart = () => {
  return { type: CLEAR_CART };
};
const updateCart = item => {
  return { type: UPDATE_CART, item };
};
const deleteCartItem = id => {
  return { type: DELETE_CART_ITEM, id };
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

export const putToCart = item => {
  return async dispatch => {
    const { data } = await axios.put('/api/cart', item);
    dispatch(updateCart(data));
  };
};

export const destroyCartItem = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/cart/${id}`);
      dispatch(deleteCartItem(id));
    } catch (err) {
      console.error(`deleting cart: ${id} unsuccessful`, err);
    }
  };
};

export default function cartReducer(state = initialState, action) {
  let productsArr;
  switch (action.type) {
    case GET_CART: {
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
    case UPDATE_CART:
      productsArr = state.cart.products.map(product => {
        return product.id === action.item.id ? action.item : product;
      });
      return {
        cart: { ...state.cart, products: productsArr },
        isFetching: true,
      };
    case DELETE_CART_ITEM:
      productsArr = state.cart.products.filter(
        product => product.id !== action.id
      );
      return {
        cart: { ...state.cart, products: productsArr },
        isFetching: true,
      };
    default:
      return state;
  }
}
