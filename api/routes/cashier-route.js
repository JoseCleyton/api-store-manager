'use strict'

const express = require('express');
const router = express.Router();
const cashierController = require('../controllers/checkout-controller');
const authService = require('../services/auth-service')

router.get('', authService.authorize, cashierController.getCashier);
module.exports = router;