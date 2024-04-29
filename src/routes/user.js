const express = require('express');
const router = express.Router();
const userDataController = require('../controller/user');

router.get('/:accountNumber', userDataController.getByAccountNumber);
router.get('/:identityNumber', userDataController.getByIdentityNumber);

module.exports = router;