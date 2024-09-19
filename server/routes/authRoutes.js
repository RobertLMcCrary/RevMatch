const express = require('express')
const  router = express.Router()
const cors = require('cors')
const { test, registerUser, loginUser, getProfile, editProfile } = require('../controllers/authController')

//middleware
router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

//routes, functions from authController.js
router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/profile', getProfile)
router.put('/edit', editProfile)

module.exports = router
