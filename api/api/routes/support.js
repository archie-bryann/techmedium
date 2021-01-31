const express = require('express');
const router = express.Router();
const supportController = require('../controllers/support');
const dotenv = require('dotenv');
dotenv.config();

router.post('/', supportController.store_message)

module.exports = router;