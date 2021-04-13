import { SET_DATA_CLIENT } from '../actions/dataClient';

const INITIAL_STATE = {
  dataClient: {},
};

function dataClient(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_DATA_CLIENT:
    return { ...state, dataClient: action.dataClient };
  default:
    return state;
  }
}

export default dataClient;
