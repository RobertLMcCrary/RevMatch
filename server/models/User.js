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
    }
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel