import axios from 'axios';

const ADD_REVIEW = 'ADD_REVIEW';
const GET_PRODUCTS = 'GET_PRODUCTS';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

const getProducts = products => ({ type: GET_PRODUCTS, products });
const createProduct = product => ({ type: CREATE_PRODUCT, product });
const updateProduct = product => ({ type: UPDATE_PRODUCT, product });
const addReview = (id, review) => ({ type: ADD_REVIEW, review, id });

export const addProduct = (product, ownProps) => {
  return async dispatch => {
    const { data } = await axios.post('/api/products', product);
    dispatch(createProduct(data));
    ownProps.history.push(`/products/${data.category.name}/${data.id}`);
  };
};

export const fetchProducts = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/products');
    dispatch(getProducts(data));
  };
};
export const editProduct = (id, product, ownProps) => {
  return async dispatch => {
    try {
      const { data } = await axios.put(`/api/products/${id}`, product);
      dispatch(updateProduct(data));
      ownProps.history.push(`/products/${data.category.name}/${data.id}`);
    } catch (err) {
      console.error(err);
    }
  };
};

export const postReview = (id, review) => {
  return async dispatch => {
    const { data } = await axios.post(`/api/products/${id}/review`, review);
    console.log(data);
    dispatch(addReview(id, data));
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
    case CREATE_PRODUCT:
      return { list: [...state.list, action.product], isFetching: true };
    case UPDATE_PRODUCT:
      return {
        list: state.list.map(
          product =>
            action.product.id === product.id ? action.product : product
        ),
        isFetching: true,
      };
    case ADD_REVIEW:
      return {
        ...state,
        list: state.list.map(product => {
          if (product.id === action.id) {
            return { ...product, reviews: [...product.reviews, action.review] };
          } else {
            return { ...product };
          }
        }),
        isFetching: true,
      };
    default:
      return state;
  }
}
