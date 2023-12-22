const express = require('express');
const router = express.Router();
const predictController = require('../controller/predict');

router.post('/', predictController.getPrediction);

module.exports = router;