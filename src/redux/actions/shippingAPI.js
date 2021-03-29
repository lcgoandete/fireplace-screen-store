export const REQUEST_SHIPPING = 'REQUEST_SHIPPING';
export const RECEIVE_SHIPPING = 'RECEIVE_SHIPPING';

const requestShipping = () => ({
  type: REQUEST_SHIPPING});

const receiveShipping = (shipping) => ({
  type: RECEIVE_SHIPPING,
  shipping});


const shipping = {
  cepOrigem: "91510000",
  weight: 5,
  productLength: 12,
  insuranceValue: 0,
  services: "1,2,3,4" // 9-Rodoviário, 10-Próximo Dia, 17-Mini Envios
};

 
const requestOptions = {
  method: "GET",
  mode: "cors",
  cache: "default"
};


const { cepOrigem, weight, productLength, services } = shipping;
export function getShippingAPI(cepDestino, width, height) {
  return async (dispatch) => {
    dispatch(requestShipping());

    try {
      const response = await fetch(`https://melhorenvio.com.br/api/v2/calculator?
from=${cepOrigem}&
to=${cepDestino}&
width=${width}&
weight=${weight}&
height=${height}&
length=${productLength}&
insurance_value=&
services=${services}`);
      const result = await response.json();
     console.log(result);
      dispatch(receiveShipping(result));
    } catch (error) {
      console.log(error);
    }
  }
};
