'use strict'

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.total = async (data) => {
    return await Product.find().count()
}
exports.listStock = async () => {
    return await Product.find();
}
exports.create = async (data) => {
    const product = await Product.create({
        name: data.name,
        price: data.price,
        quantity: data.quantity
    })
    return product;
}

exports.update = async (data) => {
    await Product.findByIdAndUpdate(data._id, {
        $set: {
            name: data.name,
            price: data.price,
            quantity: data.quantity
        }
    }, false)
    return await Product.findById(data._id)
}

exports.delete = async (id) => {
    return await Product.deleteOne({ _id: id });
}