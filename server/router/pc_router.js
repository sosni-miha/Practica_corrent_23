const Router = require("express").Router
const router = Router()

const pc_controller = require("../controllers/pc_controller")
router.get("/allPc",pc_controller.GetAllPc )
router.post("/addPc/:id", pc_controller.AddPc )
router.delete("/deletePc/:id", pc_controller.DeletePc)
router.put("/updatePc/:id", pc_controller.UpdatePc )

module.exports = router