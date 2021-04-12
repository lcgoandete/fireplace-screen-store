import { combineReducers } from 'redux';
import { product } from './product';
import { shipping } from './shipping';
import { dataClient } from './dataClient';

export const rootReducer = combineReducers({
  product,
  shipping,
  dataClient,
});
