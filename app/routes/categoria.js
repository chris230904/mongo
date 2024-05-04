const express = require ('express')

const controller = require('../controllers/categoria')

const router = express.Router()

router.get(`/categoria`, controller.getData)
router.post(`/categoria`, controller.insertData);
module.exports = router