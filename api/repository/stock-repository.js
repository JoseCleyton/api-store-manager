'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.total = async (data) => {
    return await Product.find().count()
}

exports.create = async (data) => {
    const client = await Product.create({
        name: data.name,
        price: data.price,
        quantity: data.quantity
    })
    return client;
}