import axios from "axios";

const GET_PRODUCTS = "GET_PRODUCTS";
const CREATE_PRODUCT = "CREATE_PRODUCT";

const getProducts = products => ({ type: GET_PRODUCTS, products });
const createProduct = product => ({ type: CREATE_PRODUCT, product });

export const addProduct = (product, ownProps) => {
  return async dispatch => {
    const { data } = await axios.get("/api/products");
    dispatch(createProduct(data));
  };
};

export const fetchProducts = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/products");
    dispatch(getProducts(data));
  };
};

const initialState = {
  list: [],
  isFetching: false
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { list: action.products, isFetching: true };
    case CREATE_PRODUCT:
      return { list: [...state.list, action.product], isFetching: true };
    default:
      return state;
  }
}
