/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tech` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "category";

-- DropTable
DROP TABLE "tech";

-- CreateTable
CREATE TABLE "technology" (
    "id" TEXT NOT NULL,
    "tech" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "technology_pkey" PRIMARY KEY ("id")
);
