'use strict'

const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stock-controller');
const authService = require('../services/auth-service')

router.get('/total', authService.authorize, stockController.total);
router.get('', authService.authorize, stockController.listStock);
router.post('', authService.authorize, stockController.create);
router.put('', authService.authorize, stockController.update);
router.delete('/:id', authService.authorize, stockController.delete);

module.exports = router;