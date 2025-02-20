/*
  Warnings:

  - You are about to drop the `SocilMedia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "SocilMedia";

-- CreateTable
CREATE TABLE "SocialMedia" (
    "id" UUID NOT NULL,
    "imagePath" TEXT,

    CONSTRAINT "SocialMedia_pkey" PRIMARY KEY ("id")
);
