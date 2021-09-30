const jwt = require('jsonwebtoken');

const generateToken = (req, secret = process.env.JWTSECRET) => {
    return jwt.sign(req, secret, { expiresIn: 60 * 60 * 24 });
};

const verifyToken = (token, secret = process.env.JWTSECRET) => {
    return jwt.verify(token, secret);
};

module.exports = {
    generateToken,
    verifyToken,
};
