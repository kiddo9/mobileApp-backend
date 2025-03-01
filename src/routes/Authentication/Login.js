const express = require('express');
const LoginController = require('../../controller/AuthenticationController/users');

const router = express.Router();

router.post('/Login', LoginController.Login);
router.get('/auth', LoginController.auth);

module.exports = router;