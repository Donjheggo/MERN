const { Router } = require("express");
const { getGoals, postGoals, putGoals, deleteGoals  } = require("../controllers/goalController")
const {authProtect} = require('../middlewares/authMiddleware');

const router = Router();

router
    .route("/")
    .get(authProtect, getGoals)
    .post(authProtect, postGoals)


router
    .route("/:id")
    .put(authProtect, putGoals)
    .delete(authProtect, deleteGoals)



module.exports = router;