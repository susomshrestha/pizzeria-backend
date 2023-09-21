const express = require('express');
const itemController = require('../controllers/itemController');

const router = express.Router();

router.post('/add', itemController.create);

router.get('/getAll', itemController.getAll);

module.exports = router;