const router = require('express').Router();
const { userController } = require('../controller')

router.post('/register', async (req, res) => {
    try {
        let newUser = await userController.create(req.body);
        res.send(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
});

router.post('/login', (req, res) => {
    res.send("login");
})


module.exports = router;