'use strict'

const express = require('express'),
    router = express.Router();

const user = require('../controller/user');

router.post('/login', (req, res) => {
    const { id, password } = req.body;

    user
        .login(id, password)
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            res.send(error);
        });
});

module.exports = router;
