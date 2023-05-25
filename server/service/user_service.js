const { PrismaClient } = require('@prisma/client')

const prisma_client = new PrismaClient()



class UserService {


    async GetAllUsers() {
        return prisma_client.user.findMany();
    }

    async AddUser(req) {
        const { firstName, lastName, email, numberPhone, position, jobPlace } = req.body;

        try {

            const candidateEmail = await prisma_client.user.findFirst(
                {
                    "where": {
                        "email": email
                    }
                }
            )
            if (candidateEmail) {
                return { "ERROR": "Email exist" }
            }
            const candidatePhone = await prisma_client.user.findFirst(
                {
                    "where": {
                        "numberPhone": numberPhone
                    }
                }
            )
            if (candidatePhone) {
                return { "ERROR": "Phone exist" }
            }

            const newUser = await prisma_client.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    numberPhone,
                    position,
                    jobPlace,
                    aboutPC: {}
                },
            })
            return newUser
        } catch (e) {
            console.log(e)
            return res.json({ e })
        }
    }

    async DeleteUser(req) {
        try {
            const id = req.params.id
            const user = await prisma_client.user.findFirst(
                {
                    "where": {
                        "id": id
                    }
                }
            )

            if (!user) {
                return { "ERROR": "user not found" }
            }

            const result = await prisma_client.user.delete(
                {
                    "where": {
                        "id": id
                    }
                }
            )

            return result

        } catch (e) {
            console.log(e)
        }
    }

    async UpdateUser(req) {
        try {

            const id = req.params.id
            const { field, value } = req.body

            const user = await prisma_client.user.findFirst(
                {
                    "where": {
                        "id": id
                    }
                }
            )

            if (!user) {
                return { "ERROR": "user not found" }
            }

            if (field === "" || value === "" || field === undefined || value === undefined) {
                return { "ERROR": "fields length zero" }
            }

            const updateUser = await prisma_client.user.update({
                where: {
                    id: id,
                },
                data: {
                    [field]: value,
                },
            })
            return updateUser
        } catch (e) {
            console.log(e)
        }
    }
}



module.exports = new UserService()