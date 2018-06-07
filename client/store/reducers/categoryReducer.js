import axios from "axios";

const GET_CATEGORIES = "GET_CATEGORIES";

const getCategories = categories => ({ type: GET_CATEGORIES, categories });

export const fetchCategories = () => {
  return async dispatch => {
    const { data } = await axios.get("/api/categories");
    dispatch(getCategories(data));
  };
};

const initialState = {
  list: [],
  isFetching: false
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return { list: action.categories, isFetching: true };
    default:
      return state;
  }
}
