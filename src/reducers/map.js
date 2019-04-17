import { MAP_LABS, MAP_ERROR, MAP_SET } from '../actions/types';

const INITIAL_STATE = {
  labs: [],
  mapObj: {},
  errorMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MAP_LABS:
      return { ...state, labs: action.payload };
    case MAP_SET:
      return { ...state, mapObj: action.payload };
    case MAP_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
