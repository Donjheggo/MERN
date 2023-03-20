const asyncHandler = require('express-async-handler')

// @desc GET goals
// @route /api/v1/goals
// @access Private
const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: "GET GOALS ROUTE"})
})

// @desc POST goals
// @route /api/v1/goals
// @access Private
const postGoals = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json({message: "POST GOALS ROUTE"})
})

// @desc PUT goals
// @route /api/v1/goals/:id
// @access Private
const putGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: "PUT GOALS ROUTE"})
})

// @desc DELETE goals
// @route /api/v1/goals/:id
// @access Private
const deleteGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: "DELETE GOALS ROUTE"})
})


module.exports = {
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}