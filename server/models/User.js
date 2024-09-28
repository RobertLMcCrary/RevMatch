const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: false,
        unique: false
    },
    lastname: {
        type: String,
        required: false,
        unique: false
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User
