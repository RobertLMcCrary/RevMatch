const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    media: [
        {
            type: String,
            required: true,
            unique: false
        }
    ],
    caption: {
        type: String,
        required: true,
        unique: false
    },
    likes: {
        type: Number,
        required: false,
        default: 0
    },
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            text: {
                type: String,
                required: true,
                unique: false
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

const Post = mongoose.model('Post', PostSchema)
module.exports = Post
