const express = require('express');
const router = express.Router();

router.use('/users', require('./api/users/index')());

module.exports = router;
