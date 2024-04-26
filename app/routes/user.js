const express = require ('express')

const controller = require('../controllers/user')

const router = express.Router()

router.get(`/user`, controller.getData)
router.post(`/user`, controller.insertData);
module.exports = router