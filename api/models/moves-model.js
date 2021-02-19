'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    oldCashierValue: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    paymentType: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Moves', schema)