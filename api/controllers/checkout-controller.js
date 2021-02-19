'use strict'

const clienteRepository = require('../repository/client-repository');
const checkoutRepository = require('../repository/checkout-repository');
const stockController = require('../controllers/stock-controller');
const cashierController = require('../controllers/cashier-controller');

exports.checkout = async (req, res, next) => {
    const { checkout } = req.body;

    const c = await clienteRepository.findClient(checkout.client)
    if (!c) {
        res.status(404).send({
            message: 'Cliente não encontrado'
        })
    }

    c.amountPurchases += 1;
    c.fidelity += 1;
    let clientUpdate;
    checkout.date = getDate();
    let moves = {date: checkout.date, paymentType: checkout.paymentType}
    checkoutRepository.checkout(checkout).then((result) => {
        cashierController.update(checkout.orderValue, moves);;
        stockController.listAllStock()
            .then(stock => {
                stock.forEach(product => {
                    checkout.listItens.forEach(iten => {
                        if (product._id == iten.product._id) {
                            product.quantity -= iten.quantity;
                            stockController.updateProduct(product);
                        }
                    })
                });
            })

        if (c.fidelity === 10) {
            c.fidelity = 0
            clientUpdate = clienteRepository.update(c);
            res.status(200).send({
                message: 'Checkout realizado com sucesso...',
                fidelity: true,
                qntFidelity: c.fidelity,
                checkout: result
            })
        } else {
            clientUpdate = clienteRepository.update(c);
            res.status(200).send({
                message: 'Checkout realizado com sucesso...',
                fidelity: false,
                qntFidelity: c.fidelity,
                checkout: result
            })
        }

    })

};

function getDate() {
    return new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear()
}

