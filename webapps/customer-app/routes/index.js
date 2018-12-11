const express = require('express');
const router = express.Router();
// const router = require('express').Router();
const customerController = require('../controllers/customer.controller');

router.get('/', customerController.listPage);

router.get('/add', customerController.addPage);
router.post('/add', customerController.addCustomer);

router.get('/delete', customerController.deleteCustomer);

module.exports = router;