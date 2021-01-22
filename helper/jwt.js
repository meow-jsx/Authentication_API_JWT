const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

function sign(userId) {
    return jwt.sign(userId, secret, { expiresIn: '1d' });
}

function verify(token) {
    return jwt.verify(token, secret).key;
}

module.exports = {
    sign,
    verify
}