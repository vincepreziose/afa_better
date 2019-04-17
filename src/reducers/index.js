import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import map from './map';
import auth from './auth';

export default combineReducers({
  map,
  auth,
  form: formReducer
});
