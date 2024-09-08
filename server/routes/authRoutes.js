const express = require('express')
const  router = express.Router()
const cors = require('cors')
const { test, registerUser, loginUser, getUserData } = require('../controllers/authController')

//middleware
router.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

//routes, functions from authController.js
router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router
