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
        const user = await users.findOne({ _id: resp.id });
        if (user) {
            next();
        } else {
            return res.status(401).json({ success: false, error: "Unauthorized" });
        }
    } catch (e) {
        return res.status(401).json({ success: false, error: "Unauthorized" });
    }
}

module.exports = authorize;