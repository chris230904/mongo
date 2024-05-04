const express = require ('express')

const controller = require('../controllers/producto')

const router = express.Router()

router.get(`/producto`, controller.getData)
router.post(`/producto`, controller.insertData);
module.exports = router