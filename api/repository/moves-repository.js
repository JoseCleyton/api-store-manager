'use strict'

const mongoose = require('mongoose');
const Moves = mongoose.model('Moves');

exports.getMoves = async () => {
    return await Moves.find();
}
exports.create = async (moves) => {
    return await Moves.create({
        oldCashierValue: moves.oldCashierValue,
        value: moves.value,
        paymentType: moves.paymentType,
        date: moves.date
    });
}