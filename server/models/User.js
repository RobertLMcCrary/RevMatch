const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    firstname: {
        type: String,
        required: false,
        unique: false,
    },
    lastname: {
        type: String,
        required: false,
        unique: false,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    posts: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Post',

        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    bio: {
        type: String,
        required: false,
        unique: false,
        default: "User Bio"
    },
    profilePic: {
        type: String,
        required: false,
        unique: false,
        default: "profile pic url"
    }
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel