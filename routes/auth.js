const router = require('express').Router();
const { userController } = require('../controller');
const { RegisterValidation, LoginValidation } = require('../helper').validations;


router.post('/register', async (req, res) => {

    const { error } = RegisterValidation(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);

    try {
        const emailExists = await userController.get(req.body.email);
        if (emailExists)
            return res.status(400).send('email taken!');

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