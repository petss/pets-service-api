'use strict'

const express = require('express');
const router = express.Router();

const memberController = require('../../controller/member/memberController');

router.post('/signin/', memberController.signin);

router.get('/signin/success', memberController.signin.success);
router.get('/signin/failure', memberController.signin.failure);

module.exports = router;
