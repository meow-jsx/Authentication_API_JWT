const bcrypt = require('bcrypt');

async function hashPassword(plainPassword) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(plainPassword, salt);
}

async function comparePassword(plain, hashed) {
    return bcrypt.compare(plain, hashed);
}

module.exports = {
    hashPassword,
    comparePassword
}