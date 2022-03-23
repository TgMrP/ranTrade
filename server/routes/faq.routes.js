const { Router } = require('express');
const asyncHandler = require('express-async-handler');

const QaController = require('../controller/qa.controller');

const router = Router();

router.get('/', asyncHandler(QaController.getQa));

module.exports = router;
