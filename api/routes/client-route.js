'use strict'

const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client-controller');
const authService = require('../services/auth-service')

router.get('/total', authService.authorize, clientController.total);
router.get('/', authService.authorize, clientController.listClients);
router.post('/addClient', authService.authorize, clientController.create);
module.exports = router;