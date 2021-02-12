'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    listItens: [{
        quantity: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
    }],
    orderValue: {
        type: Number,
        required: true
    },
    paymentType: {
        type: String,
        required: true
    },
    percentageDiscount: {
        type: Number,
        required: false
    },
    discountMoney: {
        type: Number,
        required: false
    },
    date: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Checkout', schema)