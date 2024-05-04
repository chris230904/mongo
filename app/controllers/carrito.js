const mongoose = require('mongoose')
const model = require('../models/carrito');

const options = {
    page: 1,
    limit: 10
}

exports.getData = (req, res) => {
    model.paginate({}, options)
        .then(docs => {
            res.send({ Items: docs });
        })
        .catch(err => {
            console.error('Error al recuperar datos:', err);
            res.status(500).send('Error interno del servidor');
        });
};

exports.insertData = (req, res) => {
    const data = req.body
    model.create(data)
        .then(docs => {
            res.send({ data: docs });
        })
        .catch(err => {
            console.error('Error al insertar datos:', err);
            res.status(500).send('Error interno del servidor');
        });
};