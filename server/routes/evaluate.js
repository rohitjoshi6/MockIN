const express = require('express');
const router = express.Router();
const { evaluateCode } = require('../controllers/evaluateController');

router.post('/', evaluateCode);

module.exports = router;
