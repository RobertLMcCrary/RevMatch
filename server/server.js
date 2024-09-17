const express = require('express')
const dotenv = require('dotenv').config()
const { mongoose } = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

//database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB connected'))
.catch(() => console.log('database not connected'))

//middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

//connecting from routes
app.use('/', require('./routes/authRoutes'))
app.use('/user', require('./routes/userRoutes'))


const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))