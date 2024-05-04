const express = require ('express')

const controller = require('../controllers/orden')

const router = express.Router()

router.get(`/orden`, controller.getData)
router.post(`/orden`, controller.insertData);
module.exports = router