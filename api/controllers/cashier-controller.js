'use strict'

const cashierRepository = require('../repository/cashier-repository');


exports.getCashier = async (req, res, next) => {
    res.status(200).send({
        cashierValue: await cashierRepository.getCashier()
    })
};

exports.update = async (cashierValue) => {
    const cashier = await cashierRepository.getCashier();
    cashier.cashierValue += cashierValue;
    return await cashierRepository.update(cashier)
};