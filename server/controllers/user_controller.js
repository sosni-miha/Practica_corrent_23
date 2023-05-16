class UserController {
    async GetUser(req, res, next)
    {
        try{
            res.json("WORKED")
        } catch(e) {}
    }
}

module.exports = new UserController()