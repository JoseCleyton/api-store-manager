'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String
    },
    amountPurchases: {
        type: Number
    },
    fidelity: {
        type: Number
    }
});

module.exports = mongoose.model('Client', schema)