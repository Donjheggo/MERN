// @desc GET goals
// @route /api/v1/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({message: "GET GOALS ROUTE"})
}

// @desc POST goals
// @route /api/v1/goals
// @access Private
const postGoals = (req, res) => {
    res.status(200).json({message: "POST GOALS ROUTE"})
}

// @desc PUT goals
// @route /api/v1/goals/:id
// @access Private
const putGoals = (req, res) => {
    res.status(200).json({message: "PUT GOALS ROUTE"})
}

// @desc DELETE goals
// @route /api/v1/goals/:id
// @access Private
const deleteGoals = (req, res) => {
    res.status(200).json({message: "DELETE GOALS ROUTE"})
}


module.exports = {
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}