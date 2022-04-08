const express = require('express');
const router = express.Router();
const users = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const {email, password} = req.body;

    if (typeof(email)!="string" || typeof(password)!="string") {
        return res.status(400).json({ success: false, error: "Invalid body" });
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        return res.status(401).json({success: false, error: "Invalid credentials"});
    }

    const user = await users.findOne({email: email});
    if (!user) {
        return res.status(401).json({ success: false, error: "Invalid credentials" });
    }

    let check = await bcrypt.compare(password, user.password);
    if (check) {
        const secret = process.env.JWT_SECRET;
        let id = user._id;
        const token = jwt.sign({id: id}, secret, {
            expiresIn: "30d"
        });
        return res.status(200).json({ success: true, token: token });
    }

    return res.status(401).json({ success: false, error: "Invalid credentials" });
});

module.exports = router;