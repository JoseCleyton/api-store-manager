'use strict'

const jwt = require('jsonwebtoken');
const SALT_KEY = '1207-agbsh-07ffga050-dd510d10ejbh-040dss';

exports.generateToken = async (data) => {
    return jwt.sign(data, SALT_KEY);
};

exports.decodeToken = async (token) => {
    let data = await jwt.verify(token, SALT_KEY);
    return data;
};

exports.authorize = (req, res, next) => {

    let token = req.headers['store-token'];
    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        jwt.verify(token, SALT_KEY, (error, decoded) => {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                next()
            }
        });
    }
};