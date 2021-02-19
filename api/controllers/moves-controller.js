'use strict'

const movesRepository = require('../repository/moves-repository');

exports.getMoves = async (req, res, next) => {
    res.status(200).send({
        moves: await movesRepository.getMoves()
    })
};
