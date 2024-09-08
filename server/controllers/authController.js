const User = require('../models/User')
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken')

//login endpoint
const test = (req, res) => {
    res.json('test is working')
}

//register endpoint
const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password } = req.body

        //check if content has been entered
        if (!firstname || !lastname || !username || !email || !password) {
            return res.json({
                error: "All fields are required"
            })
        }

        //check for strong password
        if (password.length < 6) {
            return res.json({
                error: "Password should be at least 6 characters long"
            })
        }

        //check email
        const exist = await User.findOne({ email })
        if (exist) {
            return res.json({
                error: "That Email already exists"
            })
        }

        const hashedPassword = await hashPassword(password)
        //create user
        const user = await User.create({
            firstname,
            lastname,
            username,
            email,
            password: hashedPassword, 
        })

        return res.json(user)
    }
    catch (error) {
        console.log(error)
    }
}

//login endpoint
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        //check if users exists from email
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                error: "No user found"
            })
        }

        //check password
        const match = await comparePassword(password, user.password)
        if (match) {
            //if password matches then use JWT
            jwt.sign({
                email: user.email,
                id: user._id,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
            },
                process.env.JWT_SECRET, {}, (err, token) => {
                    if (err) {
                        throw err
                    }

                    res.cookie('token', token).json(user)
                })
        }
        if (!match) {
            res.json({
                error: "Passwords do not match"
            })
        }
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
}