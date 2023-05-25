const user_service = require('../service/user_service')


// в контролере собраны все методы для работы в данном случае с пользователем
// вы создаете методы которые в свою очередь определяете ддя каждого эндпоинта
// в роутере у этих методов в круглых скобках есть входные аргументы
// req-то что прилетает от клиента(постман) res-ответ нашего сервера клиенту
// next просто пока не трогайте
class UserController {

    async GetAllUser(req, res, next) {
        try {
            console.log("all")
            res.json(await user_service.GetAllUsers())
        } catch (e) { 
            console.log(e)
        }
    }

    async AddUser(req, res, next) {
        try {
            res.json(await user_service.AddUser(req))
        } catch (e) {
            console.log(e)
        }
    }
    async DeleteUser(req, res, next) {
        try {
            res.json(await user_service.DeleteUser(req))
        } catch (e) {
            res.json({ "error": "EXCEPTION" })
        }
    }
    async UpdateUser(req, res, next) {
        try {
            res.json(await user_service.UpdateUser(req))
        } catch (e) {
            res.json({ "error": "EXCEPTION" })
        }
    }
}



module.exports = new UserController()