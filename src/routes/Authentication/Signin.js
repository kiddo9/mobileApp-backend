const express = require("express");
const router = express.Router();
const SignController = require("../../controller/AuthenticationController/users");

router.post("/signin", SignController.Signin);

module.exports = router;
