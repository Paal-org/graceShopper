import axios from 'axios';
import history from '../history';
import { fetchCart } from './reducers/cartReducer';
import { fetchAccount } from './reducers/accountReducer';

/**
 * ACTION TYPES
 */
export const GET_USER = 'GET_USER';
export const REMOVE_USER = 'REMOVE_USER';

/**
 * INITIAL STATE
 */
const defaultUser = {};

/**
 * ACTION CREATORS
 */
const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });

/**
 * THUNK CREATORS
 */
export const me = () => dispatch =>
  axios
    .get('/auth/me')
    .then(res => dispatch(getUser(res.data || defaultUser)))
    .catch(err => console.log(err));

export const auth = (method, ...args) => dispatch =>
  axios
    .post(`/auth/${method}`, {
      email: args[0],
      password: args[1],
      firstName: args[2],
      lastName: args[3],
    })
    .then(
      res => {
        dispatch(getUser(res.data));
        dispatch(fetchCart());
        dispatch(fetchAccount());
        history.push('/home');
      },
      authError => {
        // rare example: a good use case for parallel (non-catch) error handler
        dispatch(getUser({ error: authError }));
      }
    )
    .catch(dispatchOrHistoryErr => console.error(dispatchOrHistoryErr));

export const logout = () => dispatch =>
  axios
    .post('/auth/logout')
    .then(_ => {
      dispatch(removeUser());
      dispatch(fetchCart())
      history.push('/home');
    })
    .catch(err => console.log(err));

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}
