'use strict'

const mongoose = require('mongoose');
const Cashier = mongoose.model('Cashier');

exports.getCashier = async () => {
    return await Cashier.find({}, 'cashierValue');
}
exports.create = async () => {
    return await Cashier.create({
        cashierValue: 0
    });
}
exports.update = async (cashier) => {
    return await Cashier.findByIdAndUpdate(cashier._id, {
        $set: {
            cashierValue: cashier.cashierValue
        }
    })
}
