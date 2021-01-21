const { User } = require('../model');
const { hashPassword } = require('../helper').encryption;

module.exports = {

    async create(data) {
        let savedUser = await new User({
            name: data.name,
            email: data.email,
            password: await hashPassword(data.password),
        }).save();

        return savedUser;
    },

    async get(email) {
        return await User.findOne({ email });
    }
}