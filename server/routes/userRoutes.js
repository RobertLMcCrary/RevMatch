const express = require('express')
const router = express.Router()
const cors = require('cors')
const { getUserProfile, createPost, updatePost, deletePost, getPostById, getUserPosts } = require('../controllers/userController')
const {authenticate} = require('../controllers/authController')

//middleware
router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))


//routes, functions from userController.js
//router.get('/user/:id', getUserProfile)
//router.get('/posts/:id', getPostById)
//router.get('/user/:id/posts', getUserPosts)
//router.post('/posts', createPost)
//router.put('/posts', updatePost)
//router.delete('/posts', deletePost)



module.exports = router