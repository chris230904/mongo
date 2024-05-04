const express = require ('express')

const controller = require('../controllers/carrito')

const router = express.Router()

router.get(`/carrito`, controller.getData)
router.post(`/carrito`, controller.insertData);
module.exports = router