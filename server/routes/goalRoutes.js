const { Router } = require("express");
const { getGoals, postGoals, putGoals, deleteGoals  } = require("../controllers/goalController")

const router = Router();

router
    .route("/")
    .get(getGoals)
    .post(postGoals)


router
    .route("/:id")
    .put(putGoals)
    .delete(deleteGoals)



module.exports = router;