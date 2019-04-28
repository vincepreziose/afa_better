import axios from 'axios';
import {
  MAP_LABS,
  MAP_ERROR,
  AUTH_ERROR,
  AUTH_USER,
  MAP_SET,
  REPORT_DATA_UPDATE
} from './types';

export const updateAddLabReportData = (reportData) => async dispatch => {
  // TODO: do some stuff before dispatch
  dispatch({ type: REPORT_DATA_UPDATE, payload: reportData });
}

export const getLabs = () => async dispatch => {
  try {
    const response = await axios(`${process.env.REACT_APP_API_BASE_URL}/labs`, {
      headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhbmltYWxmcmVlZG9tYWN0Lm9yZyIsInN1YiI6MiwiZW1haWwiOiJjaGVyeWxiOEBjb21jYXN0Lm5ldCIsImlhdCI6MTU1NTkwNDU0MjUzMX0.5I8vEy01NpYCIZGZEvcp7ENaH95RX-WTo1NJEINzLdM'}
    });
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
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/signin`, formProps);

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
