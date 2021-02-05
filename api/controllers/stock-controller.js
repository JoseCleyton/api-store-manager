'use strict'

const stockRepository = require('../repository/stock-repository');

exports.total = async (req, res, next) => {
    res.status(200).send({
        total: await stockRepository.total()
    })

};
exports.listStock = async (req, res, next) => {
    res.status(200).send({
        stock: await stockRepository.listStock()
    })
};

exports.create = async (req, res, next) => {
    const { name, price, quantity } = req.body;
    const product = await stockRepository.create({
        name: name,
        price: price,
        quantity: quantity
    })
    if (product) {
        res.status(200).send({
            message: 'Produto adicionado com sucesso',
            product: product
        })
    } else {
        res.status(500).send({
            message: 'Erro ao adicionar produto'
        })
    }
};

exports.update = async (req, res, next) => {
    const { id, name, price, quantity } = req.body;

    const product = await stockRepository.update({
        _id: id,
        name: name,
        price: price,
        quantity: quantity
    })

    if (product) {
        res.status(200).send({
            message: 'Produto atualizado com sucesso',
            product: product
        })
    } else {
        res.status(500).send({
            message: 'Erro ao atualizar Produto'
        })
    }

};

exports.delete = async (req, res, next) => {

    res.status(200).send({
        product: await stockRepository.delete(req.params.id)
    });

};
