const asyncHandler = require('express-async-handler')
const Goal = require('../database/models/goalModel')

// @desc GET goals
// @route /api/v1/goals
// @access Private
const getGoals = asyncHandler (async (req, res) => {
    const goals = await Goal.find({ user: req.user.id})
    res.status(200).json(goals)
})

// @desc POST goals
// @route /api/v1/goals
// @access Private
const postGoals = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }
    const goal = await Goal.create({
        user: req.user.id,
        text: req.body.text
    })
    res.status(200).json(goal)
})

// @desc PUT goals
// @route /api/v1/goals/:id
// @access Private
const putGoals = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedGoal)
})

// @desc DELETE goals
// @route /api/v1/goals/:id
// @access Private
const deleteGoals = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal already deleted or doesn't exists.")
    }
    await goal.remove
    res.status(200).json({message: `Deleted ${goal.id}`})
})


module.exports = {
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}