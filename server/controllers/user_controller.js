const userService = require('../service/user_service')


// в контролере собраны все методы для работы в данном случае с пользователем
// вы создаете методы которые в свою очередь определяете ддя каждого эндпоинта
// в роутере у этих методов в круглых скобках есть входные аргументы
// req-то что прилетает от клиента(постман) res-ответ нашего сервера клиенту
// next просто пока не трогайте
class UserController {
    async GetUser(req, res, next) {
        try {
            res.json("WORKED")
        } catch (e) { }
    }

    async AddUser(req, res, next) {
        try {
            res.json(await userService.AddUser(req))
            console.log('1')
        } catch (e) {
            console.log(e)
        }
    }
    async DelUser(req, res, next) {
        try {
            res.json({ "endpoint": "deluser" })
        } catch (e) {
            res.json({ "error": "EXCEPTION" })
        }
    }
    async UpdateUser(req, res, next) {
        try {
            res.json({ "endpoint": "upduser" })
        } catch (e) {
            res.json({ "error": "EXCEPTION" })
        }
    }
}



module.exports = new UserController()