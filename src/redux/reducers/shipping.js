import {
  REQUEST_SHIPPING_LIST,
  RECEIVE_SHIPPING_LIST,
  SET_SHIPPING_PRICE,
} from '../actions/shipping'

const INITIAL_STATE = {
  isLoading: false,
  shippingList: [],
  shippingPrice: 0,
};

export const shipping = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case REQUEST_SHIPPING_LIST:
      return {...state, isLoading: true }
      
    case RECEIVE_SHIPPING_LIST:
      return {...state, shippingList: action.shippingList, isLoading: false }
        
    case SET_SHIPPING_PRICE:
      return {...state,  shippingPrice: action.shippingPrice }

    default:
      return state;
  }
 };
