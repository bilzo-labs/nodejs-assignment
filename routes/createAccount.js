const express = require('express');
const router = express.Router();
const users = require('../models/users');
const hashPassword = require('../tools/hash');

router.post('/', async (req, res) => {
    const {email, password, name} = req.body;

    if (typeof(email)!="string" || typeof(password)!="string" || typeof(name)!="string") {
        return res.status(400).json({success: false, error: "Invalid body"});
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        return res.status(400).json({success: false, error: "Invalid email"});
    }

    let user = await users.findOne({email: email});
    if (user) {
        return res.status(409).json({success: false, error: "Email already in use"});
    }

    const hashedPass = await hashPassword(req.body.password);

    let newUser = new users ({
        email: email,
        password: hashedPass,
        name: name
    });

    try {
        newUser = await newUser.save();
        return res.status(200).json({success: true, message: "Account created successfully"});
    } catch (e) {
        return res.status(500).json({success: false, error: "Internal server error"});
    }
});

module.exports = router;