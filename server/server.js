const express = require('express');
const mercadopago = require('mercadopago');

const app = express();
const port = process.env.PORT || 5000;

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

let api = '';

mercadopago.preferences.create(preference)
  .then(({ body }) => {
    api =  body.init_point;
  }).catch((error) => {
    console.log(error);
  });

  app.get('/api/mensagem', (req, res) => {
    res.send({ express: api });
  });

app.listen(port, () => console.log(`Listening on port ${port}`));