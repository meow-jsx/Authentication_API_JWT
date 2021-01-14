const router = require('express').Router();

router.use('/api/user', require('./auth'));


module.exports = router;