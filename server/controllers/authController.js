const User = require('../models/User')
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

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

const loginUser = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            username,
            email,
            password,
            posts,
            followers,
            following,
            bio,
            profilePic
        } = req.body

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
            jwt.sign({
                email: user.email,
                password: user.password,
                id: user._id,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
                posts: user.posts,
                followers: user.followers,
                following: user.following,
                bio: user.bio,
                profilePic: user.profilePic,
            }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) {
                    throw err
                }
                //res.cookie('token', token)
                res.cookie('token', token, {
                    httpOnly: true,  // Only accessible by the server
                    secure: process.env.NODE_ENV === 'production', // Only set for HTTPS in production
                    sameSite: 'lax',  // Helps protect against CSRF
                    domain: 'localhost',
                    path: '/',
                    expires: new Date(Date.now() + 8 * 3600000)
                }).json({ message: "Logged in successfully!" });
            })
        }
        else {
            return res.json({
                error: "Invalid Password"
            })
        }

    }
    catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) => {

    const token = req.cookies.token

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) {
                return res.status(401).json({ error: "Invalid token" })
            }
            res.json(user)
        })
    }
    else {
        res.json({ error: "No token provided" })
    }
}

const editProfile = async (req, res) => {
    try {

        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({ error: "No token provided" });
        }

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: "Invalid token" });
            }

            // Extract the fields from the request body that are being updated
            const { firstname, lastname, bio, profilePic } = req.body;

            // Find the user by ID and update their profile information
            const updatedUser = await User.findByIdAndUpdate(
                decoded.id,
                {
                    firstname,
                    lastname,
                    bio,
                    profilePic,
                },
                { new: true } // Return the updated user after the update
            );

            if (!updatedUser) {
                return res.status(404).json({ error: "User not found" });
            }

            // Return the updated user data as a response
            res.json({
                message: "Profile updated successfully",
                user: updatedUser,
            });
        });

    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    editProfile
}