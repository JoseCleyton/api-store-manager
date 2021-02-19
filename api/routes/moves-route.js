'use strict'

const express = require('express');
const router = express.Router();
const movesController = require('../controllers/moves-controller');
const authService = require('../services/auth-service')

router.get('', authService.authorize, movesController.getMoves);
module.exports = router;