'use strict'

const mongoose = require('mongoose');
const Client = mongoose.model('Client');

exports.total = async () => {
    return await Client.find().count()
}

exports.listClients = async () => {
    return await Client.find();
}

exports.create = async (data) => {
    let client = await Client.create({
        name: data.name,
        address: data.address,
        phoneNumber: data.phoneNumber
    })
    return client;
}

exports.update = async (data) => {
   await Client.findByIdAndUpdate(data._id, {
        $set: {
            name: data.name,
            address: data.address,
            phoneNumber: data.phoneNumber
        }
    })
  
    return await Client.findById(data._id)
}

exports.delete = async (id) => {
    return await Client.deleteOne({ _id: id });
}