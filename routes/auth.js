const router = require('express').Router();
const { userController } = require('../controller');
const { validations, encryption } = require('../helper');

router.post('/register', async (req, res) => {

    const error = validations.RegisterValidation(req.body);
    if (error)
        return res.status(400).send(error);

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

router.post('/login', async (req, res) => {

    const error = validations.LoginValidation(req.body);
    if (error) return res.status(400).send(error);

    const findUser = await userController.get(req.body.email);

    if (
        findUser &&
        await encryption.comparePassword(req.body.password, findUser.password)
    )
        res.status(200).send("Successfull");
    else
        res.send('Email/Password mismatch!');
})


module.exports = router;