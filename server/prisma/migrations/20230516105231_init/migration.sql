-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numberPhone" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "jobPlace" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PC" (
    "id" TEXT NOT NULL,
    "motherboard" TEXT NOT NULL,
    "processor" TEXT NOT NULL,
    "videocard" TEXT NOT NULL,
    "RAM" TEXT NOT NULL,
    "keyboard" TEXT NOT NULL,
    "monitor" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PC_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PC" ADD CONSTRAINT "PC_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
