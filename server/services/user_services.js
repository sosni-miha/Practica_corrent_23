const { Prisma, PrismaClient } = request("@prisma/client");

const prisma_client = new PrismaClient
class UserService {
    async GetAllUser()
    {
        return prisma_client.user.findMany({});
    }

}

module.exports = new UserService;