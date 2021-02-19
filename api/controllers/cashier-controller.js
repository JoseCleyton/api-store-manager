'use strict'

const cashierRepository = require('../repository/cashier-repository');
const movesRepository = require('../repository/moves-repository');

exports.getCashier = async (req, res, next) => {
    res.status(200).send({
        cashierValue: await cashierRepository.getCashier()
    })
};

exports.update = async (cashierValue, moves) => {
    const cashiers = await cashierRepository.getCashier();
    let cashier = cashiers[0]
    moves.oldCashierValue = cashier.cashierValue
    cashier.cashierValue += cashierValue;
    moves.value = cashier.cashierValue;
    await cashierRepository.update(cashier)
    return await movesRepository.create(moves);
};