'use strict'

const mongoose = require('mongoose');
const Checkout = mongoose.model('Checkout');

exports.listCheckouts = async () => {
    return await Checkout.find({}).populate('listItens.iten', 'name');
}

exports.checkout = async (data) => {
    let checkout = await Checkout.create({
        client: data.client,
        listItens: data.listItens,
        paymentType: data.paymentType,
        orderValue: data.orderValue,
        discountMoney: data.discountMoney,
        percentageDiscount: data.percentageDiscount,
        date: data.date
    })
    return checkout;
}
