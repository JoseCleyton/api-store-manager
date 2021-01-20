'use strict'

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.authenticate = async (data) => {
    const user = await User.findOne({
        login: data.login,
        password: data.password
    })
    return user;
}

exports.create = async (data) => {
    const user = await User.create({
        name: data.name,
        login: data.login,
        password: data.password
    })
    return user;
}