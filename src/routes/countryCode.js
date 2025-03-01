const express = require("express");
const countryCode = require('../controller/countryCodeController')

const router = express.Router();

router.get('/countryCode', countryCode.countryCodeController)

module.exports = router;