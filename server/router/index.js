const Router = require("express").Router
const router = Router()

const users = require("../controllers/user_controller")
router.get("/users", users.GetUser )
router.post("/adduser")
router.delete("/deluser")
router.post("/upduser")

module.exports = router