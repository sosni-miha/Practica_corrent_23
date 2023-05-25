const { PrismaClient } = require('@prisma/client')

const prisma_client = new PrismaClient()



class PcService {


    async GetAllPc() {
        return prisma_client.PC.findMany();
    }

    async AddPc(req) {
        try {

            const id = req.params.id
            const { motherboard, processor, videocard, RAM, keyboard, monitor } = req.body;

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

            const newPc = await prisma_client.PC.create({
                data: {
                    motherboard,
                    processor,
                    videocard,
                    RAM,
                    keyboard,
                    monitor,
                    userId: id
                },
            })
            return newPc
        } catch (e) {
            console.log(e)
            return res.json({ e })
        }
    }

    async DeletePc(req) {
        try {
            const id = req.params.id
            const pc = await prisma_client.PC.findFirst(
                {
                    "where": {
                        "id": id
                    }
                }
            )

            if (!pc) {
                return { "ERROR": "pc not found" }
            }

            const result = await prisma_client.PC.delete(
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

    async UpdatePc(req) {
        try {

            const id = req.params.id
            const { field, value } = req.body

            const pc = await prisma_client.PC.findFirst(
                {
                    "where": {
                        "id": id
                    }
                }
            )

            if (!pc) {
                return { "ERROR": "pc not found" }
            }

            if (field === "" || value === "" || field === undefined || value === undefined) {
                return { "ERROR": "fields length zero" }
            }

            const updatePc = await prisma_client.PC.update({
                where: {
                    id: id,
                },
                data: {
                    [field]: value,
                },
            })
            return updatePc
        } catch (e) {
            console.log(e)
        }
    }
}



module.exports = new PcService()