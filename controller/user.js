
const { User } = require('../model');

module.exports = {

    async create(data) {

        let savedUser = await new User({
            name: data.name,
            email: data.email,
            password: data.password,
        }).save();

        return savedUser;
    },
}