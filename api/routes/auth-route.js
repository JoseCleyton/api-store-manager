'use strict'

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');

router.post('/authenticate', authController.authenticate);
router.post('/create', authController.create);
module.exports = router;