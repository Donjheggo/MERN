const asyncHandler = require('express-async-handler')
const Goal = require('../database/models/goalModel')
const User = require('../database/models/userModel')


// @desc GET goals
// @route /api/v1/goals
// @access Private
const getGoals = asyncHandler (async (req, res) => {
    const goals = await Goal.find({ user: req.user.id})
    res.status(200).json(goals)
});

// @desc POST goals
// @route /api/v1/goals
// @access Private
const createGoal = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }
    const goal = await Goal.create({
        user: req.user.id,
        text: req.body.text
    })
    res.status(200).json(goal)
});

// @desc PUT goals
// @route /api/v1/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res, next) => {
    // Find and update the goal
    const updatedGoal = await Goal.findOneAndUpdate(
        {_id: req.params.id, user: req.user.id},
        req.body,
        {new: true}
    );

    // If goal doesn't exist
    if(!updateGoal){
        res.status(404);
        throw new Error("Goal not found");
    }

    res.status(200).json(updatedGoal)
});

// @desc DELETE goals
// @route /api/v1/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    // Find and update the goal
    const deletedGoal = await Goal.findOneAndDelete({_id: req.params.id, user: req.user.id});

    // If goal doesn't exist
    if(!deletedGoal){
        res.status(404);
        throw new Error("Goal not found");
    }

    res.status(200).json(deletedGoal)
});


module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
}