const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(`UserId:${req.userId}`);
    res.send('Welcome to the private area of the API!')
});

module.exports = router;