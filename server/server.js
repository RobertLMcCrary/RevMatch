const express = require('express')
const dotenv = require('dotenv').config()
const { mongoose } = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()

//database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB connected'))
.catch(() => console.log('database not connected'))

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

//connecting from authRoutes.js
app.use('/', require('./routes/authRoutes'))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))