const express = require('express');

const email = require('./routes/email');
const mercadopago = require('./routes/mercadoPago');

const app = express();
const port = process.env.PORT || 5000;

app.use('/mercadopago', mercadopago);

app.use('/email', email);

app.get('/', (req, res) => {
  res.send('Olá! Mundo')
});

app.listen(port, () => console.log(`Listening on port ${port}`));