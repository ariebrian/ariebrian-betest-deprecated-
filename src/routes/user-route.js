const express = require('express');
const router = express.Router();
const userController = require('../controller/user-controller');
const userDataController = require('../controller/user');

router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
router.get('/:accountNumber', userDataController.getByAccountNumber);
router.get('/:identityNumber', userDataController.getByIdentityNumber);

module.exports = router;