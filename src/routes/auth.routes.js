const router = require('express').Router()

const { login, signup} = require('../controller/auth.controller.js')

router.post('/signup', signup);
router.post('/login',login);

module.exports = router;