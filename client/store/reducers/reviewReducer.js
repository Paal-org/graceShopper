import axios from 'axios';

const ADD_REVIEW = 'ADD_REVIEW';

const addReview = review => ({ type: ADD_REVIEW, review });

export const postReview = (id, review) => {
  return async dispatch => {
    const { data } = await axios.post(`/api/products/${id}/review`, review);
    console.log(data);
    dispatch(addReview(data));
  };
};

const initialState = {
  details: [],
  isFetching: false,
};

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_REVIEW:
      return { details: [...state.details, action.review], isFetching: true };
    default:
      return state;
  }
}
