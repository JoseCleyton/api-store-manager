'use strict'

const userRepository = require('../repository/user-repository');
const authService = require('../services/auth-service');
const md5 = require('md5');


exports.create = async (req, res, next) => {
    const { name, login, password } = req.body;

    const user = await userRepository.create({
        name: name,
        login: login,
        password: md5(password)
    })

    if (user) {
        res.status(200).send({
            message: 'Usuário criado com sucesso'
        })
    }

};

exports.authenticate = async (req, res, next) => {
    const { login, password } = req.body;

    const user = await userRepository.authenticate({
        login: login,
        password: md5(password)
    })

    if (user === null) {
        res.status(400).send({
            message: 'Inválid Credentials'
        })
    } else {

        let token = await authService.generateToken({
            name: user.name,
            login: user.login
        });

        console.log(token)
        res.status(200).send({
            token: token
        })
    }

}