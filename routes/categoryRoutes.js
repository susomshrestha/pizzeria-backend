const express = require('express');
const categoryController = require('../controllers/categoryController');

const router = express.Router();

router.post('/add', categoryController.create);

router.get('/getAll', categoryController.getAll);

module.exports = router;
