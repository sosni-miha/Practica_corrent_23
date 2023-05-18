const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class UserController {
    async GetUser(req, res, next)
    {
        try{
            res.json("WORKED")
        } catch(e) {}
    }

    async AddUser(req, res, next)
    {
        try{
            const newUser = await prisma.test.create({
                data: {
                  firstName: 'Alice',
                  lastName: 'alice@prisma.io',
                },
              })
              
            res.json("Created")
        } catch(e) {
            console.log(e)
        }
    }
    async DelUser(req, res, next)
    {
        try{
            res.json({"endpoint": "deluser"}) 
              } catch(e) {
                res.json({"error": "EXCEPTION"})
              }
    }
    async UpdateUser(req, res, next)
    {
        try {
            res.json({"endpoint": "upduser"})
        } catch(e) {
            res.json({"error": "EXCEPTION"})
        }
    }
}



module.exports = new UserController()