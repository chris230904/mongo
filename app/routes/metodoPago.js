const express = require ('express')

const controller = require('../controllers/metodoPago')

const router = express.Router()

router.get(`/metodoPago`, controller.getData)
router.post(`/metodoPago`, controller.insertData);
module.exports = router