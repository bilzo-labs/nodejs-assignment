const jwt = require('jsonwebtoken');
const users = require('../models/users');

const authorize = async (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ success: false, error: "Unauthorized" });
    }

    try {
        const secret = process.env.JWT_SECRET;
        const resp = jwt.verify(token, secret);
        req.body.info = resp;
        next();
    } catch (e) {
        return res.status(401).json({ success: false, error: "Unauthorized" });
    }
}

module.exports = authorize;