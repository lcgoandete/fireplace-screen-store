import {
  REQUEST_SHIPPING_LIST,
  RECEIVE_SHIPPING_LIST,
  SET_SHIPPING,
} from '../actions/shipping'

const INITIAL_STATE = {
  isLoading: false,
  shippingList: [],
  shipping: {},
};

export const shipping = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case REQUEST_SHIPPING_LIST:
      return {...state, isLoading: true }
      
    case RECEIVE_SHIPPING_LIST:
      return {...state, shippingList: action.shippingList, isLoading: false }
        
    case SET_SHIPPING:
      return {...state,  shipping: action.shipping }

    default:
      return state;
  }
 };
