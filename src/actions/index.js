import axios from 'axios';
import { MAP_LABS, MAP_ERROR, AUTH_ERROR, AUTH_USER, MAP_SET } from './types';

export const getLabs = () => async dispatch => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/labs`);
    dispatch({ type: MAP_LABS, payload: response.data });
  } catch (e) {
    dispatch({ type: MAP_ERROR, payload: 'Whoops! Something went wrong!' });
  }
};

export const setMap = (map) => async dispatch => {
  try {
    dispatch({ type: MAP_SET, payload: map });
  } catch (e) {
    dispatch({ type: MAP_ERROR, payload: 'Whoops! Something went wrong!' });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/auth/signin', formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid login credentials!'
    })
  }
};

export const signout = (callback) => async dispatch => {
  localStorage.removeItem('token');
  dispatch({ type: AUTH_USER, payload: '' });
  callback();
};
