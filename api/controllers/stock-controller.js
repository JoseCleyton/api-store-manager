'use strict'

const stockController = require('../repository/stock-repository');

exports.total = async (req, res, next) => {
    res.status(200).send({
        total: await stockController.total()
    })

};

exports.create = async (req, res, next) => {

    const { name, price, quantity } = req.body;

    const product = await stockController.create({
        name: name,
        price: price,
        quantity: quantity
    })

    if (client) {
        res.status(200).send({
            message: 'Produto adicionado com sucesso'
        })
    } else {
        res.status(500).send({
            message: 'Erro ao adicionar produto'
        })
    }

};

