const mongoose = require('mongoose')
const {Schema} = mongoose

const messageSchema = new Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const MessageModel = mongoose.Model('Message', messageSchema)
module.exports = MessageModel
