const {Router} = require('express');
const { registerUser, loginUser, getMe, updateMe } = require("../controllers/userController");
const {authProtect} = require('../middlewares/authMiddleware')

const router = Router()

router.post("/register", registerUser)
router.post("/login", loginUser)

router 
    .route("/me")
    .get(authProtect, getMe)
    .put(authProtect, updateMe)

module.exports = router