// const requestOptions = {
//   method: "GET",
//   mode: "cors",
//   cache: "default"
// };

export const REQUEST_SHIPPING_LIST = 'REQUEST_SHIPPING_LIST';
export const RECEIVE_SHIPPING_LIST = 'RECEIVE_SHIPPING_LIST';

const requestShippingList = () => ({
  type: REQUEST_SHIPPING_LIST});

const receiveShippingList = (shippingList) => ({
  type: RECEIVE_SHIPPING_LIST,
  shippingList
});

const productData = {
  cepOrigem: "91510000",
  weight: 5,
  productLength: 12,
  insuranceValue: 0,
  services: "1,2,3,4" // 9-Rodoviário, 10-Próximo Dia, 17-Mini Envios
};

const { cepOrigem, weight, productLength, services } = productData;
export function getShippingList(cepDestino, width, height) {
  return async (dispatch) => {
    dispatch(requestShippingList());
    try {
      const response = await fetch(`https://melhorenvio.com.br/api/v2/calculator?from=${cepOrigem}&to=${cepDestino}&width=${width}&weight=${weight}&height=${height}&length=${productLength}&insurance_value=&services=${services}`);
      const result = await response.json();
      dispatch(receiveShippingList(result));
    } catch (error) {
      console.log(error);
    }
  }
};

export const SET_SHIPPING = 'SET_SHIPPING';
export function setShipping(shipping) {
  return {
    type: SET_SHIPPING,
    shipping,
  }
};
