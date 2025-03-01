const express = require('express');
const app = express.Router();
const Hcontrollers = require('../controller/homeController')
const paymentMethodController = require('../controller/paymentMethod')

app.get('/Home', Hcontrollers.Home)
app.get('/getPlace/:id', Hcontrollers.getPlace)
app.get('/paymentMethod', paymentMethodController.paymentMethod)
app.get('/paymentMethod/:id', paymentMethodController.getPaymentMethod)

module.exports = app;