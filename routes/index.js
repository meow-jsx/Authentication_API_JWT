const router = require('express').Router();
const { jwtAuth } = require('./middleware');

router.use('/user', require('./auth'));
router.use('/private', jwtAuth, require('./privateArea'));

module.exports = router;