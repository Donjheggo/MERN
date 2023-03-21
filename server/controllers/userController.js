const asyncHandler = require('express-async-handler')
const User = require("../database/models/userModel")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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

    // Hash password
    const salt = 

    res.status(200).json({message: "Register User"})
})

// @desc Authenticate a user
// @route POST /api/v1/users/login
// @access Public
const loginUser = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Login user"})
})

// @desc Get user data
// @route GET /api/v1/users/me
// @access Public
const getMe = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Get user data"})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}