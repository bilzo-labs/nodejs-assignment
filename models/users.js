const mongoose = require('mongoose');

const users = mongoose.model('users', new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        trim: true,
    }
}));

module.exports = users;