'user strict'
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => { })
    .catch((erro) => {
        console.log(erro)
    });

const userModel = require('./models/user-model');
const clientModel = require('./models/client-model');
const productModel = require('./models/product-model');
const checkoutModel = require('./models/checkout-model');
const itenModel = require('./models/iten-model');
const cashierModel = require('./models/cashier-model');
const moves = require('./models/moves-model');

const authRouter = require('./routes/auth-route');
const clientRouter = require('./routes/client-route');
const stockRouter = require('./routes/stock-route');
const checkoutRouter = require('./routes/checkout-route');
const cashierRouter = require('./routes/cashier-route');
const movesRouter = require('./routes/moves-route');

app.use(bodyParser.json({
    limit: "5mb"
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization , store-token');
    res.header('Access-Control-Allow-Methods', ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']);
    app.use(cors());
    next();
});

app.use('/auth', authRouter);
app.use('/client', clientRouter);
app.use('/stock', stockRouter);
app.use('/checkout', checkoutRouter);
app.use('/cashier', cashierRouter);
app.use('/moves', movesRouter)

module.exports = app;