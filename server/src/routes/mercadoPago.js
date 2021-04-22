const express = require('express');
const path = require('path');

const dirEnv = path.join(__dirname, '../.env');
require('dotenv').config({ path: dirEnv });

const router = express.Router();
const mercadopago = require('mercadopago');

mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN);

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.post('/test', (req, resp) => {
  console.log(req.body.description)
  resp.send(req.body.description)
});

router.post('/create_preference', (req, res) => {
  console.log(req.body);
  let preference = {
    items: [{
      title: req.body.order.product.description,
      unit_price: Number(req.body.order.product.price),
      quantity: Number(req.body.order.product.quantity),
    }],
    back_urls: {
      "success": "http://localhost:3000/",
      "failure": "http://localhost:3000/",
      "pending": "http://localhost:3000/"
    },
    auto_return: 'approved',
  };

  mercadopago.preferences.create(preference)
    .then((response) => {
      res.json({checkout: response.body.init_point})
    }).catch((error) => {
      console.log(error);
    });
});

router.get('/feedback', (request, response) => {
  response.json({
    Payment: request.query.payment_id,
    Status: request.query.status,
    MerchantOrder: request.query.merchant_order_id
  })
});

module.exports = router;
