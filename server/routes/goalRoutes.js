const { Router } = require("express");
const { getGoals, createGoal, updateGoal, deleteGoal  } = require("../controllers/goalController")
const {authProtect} = require('../middlewares/authMiddleware');

const router = Router();

router
    .route("/")
    .get(authProtect, getGoals)
    .post(authProtect, createGoal)


router
    .route("/:id")
    .put(authProtect, updateGoal)
    .delete(authProtect, deleteGoal)



module.exports = router;