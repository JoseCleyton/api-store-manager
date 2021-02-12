'use strict'

const mongoose = require('mongoose');
const Cashier = mongoose.model('Cashier');

exports.getCashier = async () => {
    return await Cashier.find();
}

exports.update = async (cashier) => {
    let c= await Cashier.findByIdAndUpdate(cashier._id, {
        cashierValue: cashier.cashierValue
    })
    return c;
}
