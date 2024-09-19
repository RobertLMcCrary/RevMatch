const User = require('../models/User')
const Post = require('../models/Post')
const jwt = require('jsonwebtoken')

const getUser = async (req, res) => {
    res.json({ message: 'user controller function called successfully' })
}

const getPostById = async (req, res) => {
    res.json({ message: 'user controller function called successfully' })
}

getUserPosts = async (req, res) => {
    res.json({ message: 'user controller function called successfully' })
}

const createPost = async (req, res) => {
    res.json({ message: 'user controller function called successfully' })
}

const updatePost = async (req, res) => {
    res.json({ message: 'user controller function called successfully' })
}

const deletePost = async (req, res) => {
    res.json({ message: 'user controller function called successfully' })
}


module.exports = {
    getPostById,
    getUserPosts,
    createPost,
    updatePost,
    deletePost,
    getUser
}