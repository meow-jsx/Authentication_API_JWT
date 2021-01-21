const bcrypt = require('bcrypt');

async function hashPassword(plainPassword) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(plainPassword, salt);
}
module.exports = {
    hashPassword
}