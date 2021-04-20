// SDK de Mercado Pago
const mercadopago = require('mercadopago');

const preferenceId = () => {
  // Configura credenciais
  mercadopago.configure({
    access_token: '',
  });

  // Cria um objeto de preferência
  const preference = {
    items: [
      {
        title: 'Meu produto',
        unit_price: 100,
        quantity: 1,
      },
    ],
  };

  mercadopago.preferences.create(preference)
    .then(({ body }) => {
      // console.log(body.init_point);
      return body.init_point;
    }).catch((error) => {
      console.log(error);
    });
};

module.exports = { preferenceId };
