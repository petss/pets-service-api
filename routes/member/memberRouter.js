'use strict'

const express = require('express');
const router = express.Router();

const memberController = require('../../controller/member/memberController');

router.post('/login/', memberController.login)

module.exports = router;
