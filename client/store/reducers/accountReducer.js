import axios from 'axios';

const GET_ACCOUNT = 'GET_ACCOUNT';
const CLEAR_ACCOUNT = 'CLEAR_ACCOUNT';

const getAccount = account => ({ type: GET_ACCOUNT, account });
export const clearAccount = () => {
  return { type: CLEAR_ACCOUNT };
};

const initialState = {
  details: [],
  isFetching: false,
};

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNT:
      return { details: action.account, isFetching: true };
    case CLEAR_ACCOUNT:
      return { details: [], isFetching: true };
    default:
      return state;
  }
}

export const fetchAccount = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/users/account');
    dispatch(getAccount(data));
  };
};
