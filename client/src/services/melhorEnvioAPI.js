const pedido = {
  frete: {
    cepOrigem: '91510000',
    cepDestino: document.getElementById('cep').value,
    insuranceValue: 0,
    services: '1,2,3,4', // 9-Rodoviário, 10-Próximo Dia, 17-Mini Envios
  },
};

// const requestOptions = {
//   method: "GET",
//   mode: "cors",
//   cache: "default"
// };

const getShipping = () => fetch(`https://melhorenvio.com.br/api/v2/calculator?from=${pedido.frete.cepOrigem}&to=${pedido.frete.cepDestino}&width=${pedido.produto.espessura}&weight=${pedido.produto.peso}&height=${pedido.produto.altura}&length=${pedido.produto.largura}&insurance_value=&services=${pedido.frete.services}`)
  .then((response) => {
    response.json()
      .then((result) => mostrarFretes(result));
  })
  .catch((error) => console.log('error -- ', error));

export default getShipping;
