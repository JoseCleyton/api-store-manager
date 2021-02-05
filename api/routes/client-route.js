'use strict'

const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client-controller');
const authService = require('../services/auth-service')

router.get('/total', authService.authorize, clientController.total);
router.get('/', authService.authorize, clientController.listClients);
router.post('', authService.authorize, clientController.create);
router.put('', authService.authorize, clientController.update);
router.delete('/:id', authService.authorize, clientController.delete);
module.exports = router;