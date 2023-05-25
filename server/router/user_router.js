const Router = require("express").Router
const router = Router()

//роутер в свою очередь смотрит на эдпоинт и вызывает соответствующий метод из
// контроллера ("/users" "adduser" "/deluser" и так далее это эндпоинты)
// .get .post .delete это тип http запроса
// в круглых скобках передаются аргументы они разделяются между собой запятой
// первый аргумент эндпоинт второй какой метод вызвать или какой функционал выполнить
// переходим в контроллер
const user_controller = require("../controllers/user_controller")
router.get("/allUsers", user_controller.GetAllUser)
router.post("/addUser", user_controller.AddUser )
router.delete("/deleteUser/:id", user_controller.DeleteUser)
router.put("/updateUser/:id", user_controller.UpdateUser)

module.exports = router