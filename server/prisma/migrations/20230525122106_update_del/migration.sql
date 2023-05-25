-- DropForeignKey
ALTER TABLE "PC" DROP CONSTRAINT "PC_userId_fkey";

-- AlterTable
ALTER TABLE "PC" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
