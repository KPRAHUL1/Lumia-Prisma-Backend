-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "colors" TEXT[],
ADD COLUMN     "materials" TEXT[],
ADD COLUMN     "sizes" TEXT[],
ADD COLUMN     "subscription" BOOLEAN NOT NULL DEFAULT false;
