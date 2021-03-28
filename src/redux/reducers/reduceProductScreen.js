import { HANDLE_DIMENSION } from '../actions/handleDimension';
import { CALCULATE_PRICE } from '../actions/calculatePrice';
import { valorCmQuadrado } from '../../services/calculateScreen.js';

const INITIAL_STATE = {
  height: '',
  width: '',
  price: 0,
}

export const reduceProduct = (state = INITIAL_STATE, action) => {
  const area = +(state.height) * +(state.width);
  switch (action.type) {
    case HANDLE_DIMENSION:
      return { ...state, [action.name]: action.value };
    case CALCULATE_PRICE:
      return { ...state, price: valorCmQuadrado(area) }
    default:
      return state;
  }
}