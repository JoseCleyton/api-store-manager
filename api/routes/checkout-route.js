'use strict'

const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkout-controller');
const authService = require('../services/auth-service')

router.post('', authService.authorize, checkoutController.checkout);
module.exports = router;