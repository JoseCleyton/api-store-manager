'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    cashierValue: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Cashier', schema)