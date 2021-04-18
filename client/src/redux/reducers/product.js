import { HANDLE_DIMENSION } from '../actions/handleDimension';
import { CALCULATE_PRICE } from '../actions/calculatePrice';
import valorCmQuadrado from '../../services/calculateScreen';

const INITIAL_STATE = {
  height: 0,
  width: 0,
  price: 0,
};

const product = (state = INITIAL_STATE, action) => {
  const area = parseInt(state.height, 10) * parseInt(state.width, 10);
  switch (action.type) {
  case HANDLE_DIMENSION:
    return { ...state, [action.name]: parseInt(action.value, 10) };
  case CALCULATE_PRICE:
    return { ...state, price: parseFloat(valorCmQuadrado(area)) };
  default:
    return state;
  }
};

export default product;
