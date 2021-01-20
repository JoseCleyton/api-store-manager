'use strict'

const mongoose = require('mongoose');
const Client = mongoose.model('Client');

exports.total = async () => {
    return await Client.find().count()
}

exports.create = async (data) => {
    let client = await Client.create({
        name: data.name,
        address: data.address,
        phoneNumber: data.phoneNumber
    })
    return client;
}