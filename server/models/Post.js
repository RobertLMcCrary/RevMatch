const mongoose = require('mongoose');
const { Schema } = mongoose

const postSchema = new Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    caption: { 
        type: String, 
        required: true 
    },
    media: { 
        type: [String], 
        required: false 
    }, 
    createdAt: { 
        type: Date,
        default: Date.now 
    },
    comments: [
        {
            type: String,
            createdAt: Date.now
        }
    ],
    likes: {
        type: Number,
    }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;