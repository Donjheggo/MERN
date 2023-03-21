const asyncHandler = require('express-async-handler')
const User = require("../database/models/userModel")
const {hashPassword, comparePassword, generateToken} = require('../utils/helpers')

// @desc Register new user
// @route POST /api/v1/users
// @access Public
const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add all fields")
    }

    // Check if user exist
    const userExist = await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error("User already exist")
    }

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashPassword(password),
        token: generateToken(user._id)
    }) 

    // Validate user data
    if(!user){
        res.status(400)
        throw new Error("Invalid user data")
      
    }

    // Sucessful request
    res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email
    })
})

// @desc Authenticate a user
// @route POST /api/v1/users/login
// @access Public
const loginUser = asyncHandler(async(req, res) => {
    try{
        const {email, password} = req.body
        const user = await User.findOne({ email });
        const isPasswordMatch = await comparePassword(password, user.password);

        // Check user email
        if(!user){
            res.status(401)
            throw new Error("Invalid credentials")
        }
    
        // Check password
        if(!isPasswordMatch){
            res.status(401)
            throw new Error("Invalid credentials")
        }
        
        // Success response
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });

    }catch(err){
        res.status(500)
        throw new Error(err.message)
    }
})

// @desc Get user data
// @route GET /api/v1/users/me
// @access Private
const getMe = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Get user data"})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}