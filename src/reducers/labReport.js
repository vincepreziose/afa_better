import { REPORT_DATA_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REPORT_DATA_UPDATE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}