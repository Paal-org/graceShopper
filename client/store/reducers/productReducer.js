import axios from 'axios';

const GET_PRODUCTS = 'GET_PRODUCTS';

const getProducts = products => ({ type: GET_PRODUCTS, products });

export const fetchProducts = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/products');
    dispatch(getProducts(data));
  };
};

const initialState = {
  list: [],
  isFetching: false,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { list: action.products, isFetching: true };
    default:
      return state;
  }
}
