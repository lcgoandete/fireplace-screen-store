import { combineReducers } from 'redux';
import { reduceProduct } from './reduceProductScreen';
import { reducerShipping } from './reducerShipping';

export const rootReducer = combineReducers({
  reduceProduct,
  reducerShipping,
});
