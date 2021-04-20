const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const dirEnv = path.join(__dirname, '../.env');
require('dotenv').config({ path: dirEnv });

const router = express.Router();

const user = process.env.USER_EMAIL;
const pass = process.env.PASS_EMAIL;

router.get('/', (req, res) => {
 const transporter = nodemailer.createTransport({
   host: 'smtp.office365.com',
   secure: false, // use TLS
   port: 587,
   auth: { user, pass }
 });

 transporter.sendMail({
   from: user,
   to: user,
   subject: 'teste de envio de email',
   text: 'email enviado pelo servidor nodemailer'
 }).then((info) => {
   res.send(info)
 }).catch((error) => {
   res.send(error)
 })
});

module.exports = router;
