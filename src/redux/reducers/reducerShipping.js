import {
  REQUEST_SHIPPING,
  RECEIVE_SHIPPING
} from '../actions/shippingAPI'

const INITIAL_STATE = {
  isLoading: false,
  shipping: ''
};
export const reducerShipping = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SHIPPING:
      return {...state, isLoading: true}
  
    case RECEIVE_SHIPPING:
    return {...state, shipping: action.shipping, isLoading: false}

    default:
      return state;
  }
 };
