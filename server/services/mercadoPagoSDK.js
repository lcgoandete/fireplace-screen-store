// SDK de Mercado Pago
const mercadopago = require('mercadopago');

const preferenceId = () => {
  // Configura credenciais
  mercadopago.configure({
    access_token: 'TEST-3541797668710150-121817-98503e1057f200f6ca8e909e3a39b4f2-6024630',
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
