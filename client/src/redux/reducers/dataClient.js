import { SET_DATA_CLIENT } from '../actions/dataClient';

const INITIAL_STATE = {
  disableButton: true,
};

function dataClient(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_DATA_CLIENT:
    return { ...state, ...action.dataClient };
  default:
    return state;
  }
}

export default dataClient;
