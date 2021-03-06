'use strict'

const clienteRepository = require('../repository/client-repository');

exports.total = async (req, res, next) => {

    res.status(200).send({
        total: await clienteRepository.total()
    })

};

exports.listClients = async (req, res, next) => {
    res.status(200).send({
        clients: await clienteRepository.listClients()
    })

};

exports.create = async (req, res, next) => {
    const { name, address, phoneNumber } = req.body;

    const client = await clienteRepository.create({
        name: name,
        address: address,
        phoneNumber: phoneNumber
    })

    if (client) {
        res.status(200).send({
            message: 'Cliente adicionado com sucesso',
            client: client
        })
    } else {
        res.status(500).send({
            message: 'Erro ao adicionar cliente'
        })
    }
};

exports.update = async (req, res, next) => {
    const { id, name, address, phoneNumber } = req.body;
    
    const client = await clienteRepository.update({
        _id: id,
        name: name,
        address: address,
        phoneNumber: phoneNumber
    })

    if (client) {
        res.status(200).send({
            message: 'Cliente atualizado com sucesso',
            client: client
        })
    } else {
        res.status(500).send({
            message: 'Erro ao adicionar cliente'
        })
    }

};

exports.delete = async (req, res, next) => {

    res.status(200).send({
        client: await clienteRepository.delete(req.params.id)
    });

};

