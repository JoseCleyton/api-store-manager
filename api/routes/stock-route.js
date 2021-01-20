'use strict'

const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stock-controller');
const authService = require('../services/auth-service')

router.get('/total', authService.authorize, stockController.total);
router.post('/create', authService.authorize, stockController.create);
module.exports = router;