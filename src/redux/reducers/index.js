import { combineReducers } from 'redux';
import product from './product';
import shipping from './shipping';
import dataClient from './dataClient';

const rootReducer = combineReducers({
  product,
  shipping,
  dataClient,
});

export default rootReducer;
