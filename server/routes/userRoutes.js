const {Router} = require('express');
const { registerUser, loginUser, getMe } = require("../controllers/userController");
const {authProtect} = require('../middlewares/authMiddleware')

const router = Router()

router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/me", authProtect, getMe)

module.exports = router