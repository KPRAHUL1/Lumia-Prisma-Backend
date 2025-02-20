/*
  Warnings:

  - You are about to drop the column `imagepath` on the `Brand` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Brand" DROP COLUMN "imagepath",
ADD COLUMN     "imagePath" TEXT;
