import { combineReducers } from 'redux';
import { product } from './product';
import { shipping } from './shipping';

export const rootReducer = combineReducers({
  product,
  shipping,
});
