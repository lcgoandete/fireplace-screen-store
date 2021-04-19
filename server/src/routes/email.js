const express = require('express');

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '/media/luis/aedf32cc-1156-43d9-b76c-230deae99328/luis/projetos/vscode/fireplace-screen-store/server/src/.env' });

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
