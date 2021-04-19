const express = require('express');

const router = express.Router();
const mercadopago = require('mercadopago');

mercadopago.configurations.setAccessToken('TEST-3541797668710150-121817-98503e1057f200f6ca8e909e3a39b4f2-6024630');


router.use(express.json());
router.use(express.urlencoded({ extended: false }));


router.post('/test', (req, resp) => {
  console.log(req.body.description)
  resp.send(req.body.description)
});

router.post('/create_preference', (req, res) => {
  let preference = {
    items: [{
      title: req.body.description,
      unit_price: Number(req.body.price),
      quantity: Number(req.body.quantity),
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
