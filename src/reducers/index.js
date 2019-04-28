import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import map from './map';
import auth from './auth';
import labReport from './labReport';

export default combineReducers({
  map,
  auth,
  labReport,
  form: formReducer
});
